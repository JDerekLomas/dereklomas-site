#!/usr/bin/env python3
"""Archive Medium and Substack posts with images to local markdown files."""

import json
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import urljoin, urlparse

import feedparser
import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md

BASE_DIR = Path(__file__).resolve().parent.parent / "content" / "archive"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

FEEDS = {
    "medium": "https://medium.com/feed/@dereklomas",
    "substack": "https://aixd.substack.com/feed",
}


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text[:80].strip("-")


def fetch_feed(url: str) -> list[dict]:
    """Parse an RSS feed and return list of post metadata."""
    print(f"  Fetching feed: {url}")
    feed = feedparser.parse(url)
    posts = []
    for entry in feed.entries:
        published = entry.get("published_parsed") or entry.get("updated_parsed")
        if published:
            dt = datetime(*published[:6])
        else:
            dt = datetime.now()

        # Medium RSS includes full HTML in content:encoded (feedparser exposes as .content)
        content_html = ""
        if hasattr(entry, "content") and entry.content:
            content_html = entry.content[0].get("value", "")

        posts.append({
            "title": entry.get("title", "Untitled"),
            "url": entry.get("link", ""),
            "date": dt.strftime("%Y-%m-%d"),
            "date_iso": dt.isoformat(),
            "summary": entry.get("summary", ""),
            "content_html": content_html,
        })
    return posts


def download_image(img_url: str, images_dir: Path, post_url: str) -> str | None:
    """Download an image and return its local relative path."""
    try:
        # Resolve relative URLs
        if not img_url.startswith(("http://", "https://")):
            img_url = urljoin(post_url, img_url)

        # Skip tracking pixels and tiny images
        if "stat" in img_url and ("medium.com" in img_url or "substack" in img_url):
            return None

        resp = requests.get(img_url, headers=HEADERS, timeout=30)
        resp.raise_for_status()

        # Determine filename from URL
        parsed = urlparse(img_url)
        filename = os.path.basename(parsed.path)
        if not filename or filename == "/":
            filename = "image.jpg"

        # Ensure unique filename
        ext = Path(filename).suffix or ".jpg"
        name = Path(filename).stem or "image"
        name = re.sub(r"[^\w.-]", "_", name)[:60]
        final_name = f"{name}{ext}"

        counter = 1
        while (images_dir / final_name).exists():
            final_name = f"{name}_{counter}{ext}"
            counter += 1

        images_dir.mkdir(parents=True, exist_ok=True)
        (images_dir / final_name).write_bytes(resp.content)
        return f"images/{final_name}"

    except Exception as e:
        print(f"    Warning: Failed to download image {img_url}: {e}")
        return None


def extract_article_content(html: str, platform: str) -> BeautifulSoup:
    """Extract the main article content, stripping navigation/chrome."""
    soup = BeautifulSoup(html, "html.parser")

    if platform == "medium":
        # Medium article content
        article = soup.find("article") or soup.find("div", class_=re.compile("postArticle|meteredContent"))
        if article:
            return article
    elif platform == "substack":
        # Substack article body
        article = soup.find("div", class_=re.compile("body|post-content|available-content"))
        if not article:
            article = soup.find("article")
        if article:
            return article

    # Fallback: try common article selectors
    for selector in ["article", "main", "[role='main']"]:
        found = soup.find(selector)
        if found:
            return found

    return soup.find("body") or soup


def process_post(post: dict, platform: str) -> dict | None:
    """Download, extract, and save a single post."""
    slug = slugify(post["title"])
    folder_name = f"{post['date']}-{slug}"
    post_dir = BASE_DIR / platform / folder_name
    images_dir = post_dir / "images"

    # Skip if already archived
    if (post_dir / "index.md").exists():
        print(f"  Skipping (already archived): {post['title']}")
        return {
            "title": post["title"],
            "date": post["date"],
            "url": post["url"],
            "platform": platform,
            "path": str(post_dir.relative_to(BASE_DIR)),
            "skipped": True,
        }

    print(f"  Downloading: {post['title']}")
    print(f"    URL: {post['url']}")

    html = None
    try:
        resp = requests.get(post["url"], headers=HEADERS, timeout=30)
        resp.raise_for_status()
        html = resp.text
    except Exception as e:
        print(f"    Page fetch failed ({e}), using RSS content")

    if html:
        article = extract_article_content(html, platform)
    elif post.get("content_html"):
        # Fallback: use content:encoded from RSS (Medium includes full article)
        article = BeautifulSoup(post["content_html"], "html.parser")
    elif post.get("summary"):
        # Second fallback: use RSS summary
        article = BeautifulSoup(post["summary"], "html.parser")
    else:
        print(f"    ERROR: No content available for {post['title']}")
        return None

    # Download images and rewrite URLs
    image_count = 0
    for img in article.find_all("img"):
        src = img.get("src") or img.get("data-src") or ""
        if not src:
            continue
        local_path = download_image(src, images_dir, post["url"])
        if local_path:
            img["src"] = local_path
            image_count += 1

    # Convert to markdown
    markdown_content = md(str(article), heading_style="ATX", strip=["script", "style", "nav"])
    # Clean up excessive whitespace
    markdown_content = re.sub(r"\n{3,}", "\n\n", markdown_content)
    markdown_content = markdown_content.strip()

    # Build front matter
    front_matter = f"""---
title: "{post['title'].replace('"', '\\"')}"
date: "{post['date']}"
source_url: "{post['url']}"
platform: "{platform}"
archived: "{datetime.now().isoformat()}"
---

"""

    # Save
    post_dir.mkdir(parents=True, exist_ok=True)
    (post_dir / "index.md").write_text(front_matter + markdown_content, encoding="utf-8")

    print(f"    Saved: {post_dir / 'index.md'} ({image_count} images)")

    return {
        "title": post["title"],
        "date": post["date"],
        "url": post["url"],
        "platform": platform,
        "path": str(post_dir.relative_to(BASE_DIR)),
        "images": image_count,
    }


def main():
    print("=== Archiving Medium & Substack Posts ===\n")
    manifest = []

    for platform, feed_url in FEEDS.items():
        print(f"\n--- {platform.upper()} ---")
        posts = fetch_feed(feed_url)
        print(f"  Found {len(posts)} posts\n")

        for post in posts:
            result = process_post(post, platform)
            if result:
                manifest.append(result)
            time.sleep(1)  # Be polite

    # Write manifest
    BASE_DIR.mkdir(parents=True, exist_ok=True)
    manifest_path = BASE_DIR / "index.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"\n=== Done! Archived {len(manifest)} posts ===")
    print(f"Manifest: {manifest_path}")

    # Summary
    platforms = {}
    for entry in manifest:
        p = entry["platform"]
        platforms[p] = platforms.get(p, 0) + 1
    for p, count in platforms.items():
        print(f"  {p}: {count} posts")


if __name__ == "__main__":
    main()
