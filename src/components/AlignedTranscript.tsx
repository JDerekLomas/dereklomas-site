"use client";

import { useEffect, useRef, useState } from "react";

type Word = { t: string; s: number; e: number; ev?: number };
type Para = { note?: string; words: Word[] };
type Turn = { name: string; start: number; paras: Para[] };

function fmt(t: number) {
  t = Math.floor(t);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return (h ? `${h}:${String(m).padStart(2, "0")}` : `${m}`) + `:${String(s).padStart(2, "0")}`;
}

/**
 * Word-aligned transcript: the word under the playhead is highlighted and
 * clicking any word seeks the audio. The transcript DOM (~15k spans) is built
 * imperatively once; playback updates touch only the two affected elements.
 */
export default function AlignedTranscript({
  transcriptUrl,
  audioUrl,
}: {
  transcriptUrl: string;
  audioUrl: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const flatRef = useRef<{ s: number; el: HTMLSpanElement }[]>([]);
  const lastActiveRef = useRef<HTMLSpanElement | null>(null);
  const followRef = useRef(true);
  const [follow, setFollow] = useState(true);

  useEffect(() => {
    followRef.current = follow;
  }, [follow]);

  useEffect(() => {
    const audio = audioRef.current;
    const main = mainRef.current;
    if (!audio || !main) return;
    let cancelled = false;

    fetch(transcriptUrl)
      .then((r) => r.json())
      .then((data: { turns: Turn[] }) => {
        if (cancelled) return;
        const flat = flatRef.current;
        const frag = document.createDocumentFragment();
        for (const turn of data.turns) {
          const div = document.createElement("div");
          div.className = "tr-turn";
          const head = document.createElement("div");
          head.className = "tr-head";
          const name = document.createElement("span");
          name.textContent = turn.name;
          const ts = document.createElement("span");
          ts.className = "tr-ts";
          ts.textContent = fmt(turn.start);
          ts.onclick = () => {
            audio.currentTime = turn.start;
            audio.play();
          };
          head.append(name, ts);
          div.appendChild(head);
          for (const para of turn.paras) {
            const p = document.createElement("p");
            p.className = "tr-para";
            if (para.note) {
              const n = document.createElement("span");
              n.className = "tr-note";
              n.textContent = para.note;
              n.onclick = () => {
                audio.currentTime = para.words[0].s;
                audio.play();
              };
              p.appendChild(n);
            }
            for (const w of para.words) {
              const m = w.t.match(/^(\s*)([\s\S]*)$/)!;
              if (m[1]) p.appendChild(document.createTextNode(m[1]));
              const span = document.createElement("span");
              span.className = "tr-w" + (w.ev ? " tr-ev" : "");
              span.textContent = m[2];
              span.onclick = () => {
                audio.currentTime = w.s;
                audio.play();
              };
              p.appendChild(span);
              flat.push({ s: w.s, el: span });
            }
            div.appendChild(p);
          }
          frag.appendChild(div);
        }
        main.appendChild(frag);
      });

    const onTime = () => {
      const flat = flatRef.current;
      if (!flat.length) return;
      const t = audio.currentTime;
      let lo = 0,
        hi = flat.length - 1,
        best = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (flat[mid].s <= t) {
          best = mid;
          lo = mid + 1;
        } else hi = mid - 1;
      }
      if (best < 0) return;
      const el = flat[best].el;
      if (el === lastActiveRef.current) return;
      lastActiveRef.current?.classList.remove("tr-active");
      el.classList.add("tr-active");
      lastActiveRef.current = el;
      if (followRef.current && !audio.paused) {
        const r = el.getBoundingClientRect();
        if (r.top < 130 || r.bottom > window.innerHeight - 80) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };
    audio.addEventListener("timeupdate", onTime);
    return () => {
      cancelled = true;
      audio.removeEventListener("timeupdate", onTime);
      main.replaceChildren();
      flatRef.current = [];
      lastActiveRef.current = null;
    };
  }, [transcriptUrl]);

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 px-6 py-3 bg-[var(--bg-cream)]/95 backdrop-blur border-b border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <audio
            ref={audioRef}
            controls
            preload="metadata"
            src={audioUrl}
            className="w-full h-10"
          />
          <button
            onClick={() => setFollow(!follow)}
            title="Auto-scroll the transcript with playback"
            className={`font-[family-name:var(--font-inter)] text-xs font-medium whitespace-nowrap rounded-full px-3.5 py-1.5 border transition-colors cursor-pointer ${
              follow
                ? "border-[var(--accent-rust)] text-rust bg-[var(--accent-rust)]/10"
                : "border-[var(--border-color)] text-text-muted bg-transparent"
            }`}
          >
            {follow ? "Following" : "Follow audio"}
          </button>
        </div>
      </div>
      <div ref={mainRef} className="aligned-transcript max-w-2xl mx-auto pt-9" />
      <style>{`
        .tr-turn { margin: 0 0 26px; }
        .tr-head {
          font-family: var(--font-inter), sans-serif;
          font-size: 12.5px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--accent-rust);
          margin-bottom: 6px;
          display: flex; align-items: baseline; gap: 10px;
        }
        .tr-ts { font-weight: 400; color: var(--text-muted, #8a7f70); cursor: pointer; }
        .tr-ts:hover { color: var(--accent-rust); text-decoration: underline; }
        .tr-para { margin: 0 0 14px; position: relative; line-height: 1.65; }
        .tr-para:last-child { margin-bottom: 0; }
        .tr-note {
          font-family: var(--font-cormorant), Georgia, serif;
          font-style: italic; font-weight: 600;
          font-size: 16.5px; line-height: 1.35;
          color: var(--accent-rust);
          cursor: pointer;
        }
        @media (min-width: 1160px) {
          .tr-note {
            position: absolute; left: 100%; margin-left: 36px;
            width: 200px; top: 4px; text-align: left;
          }
          .tr-note::before {
            content: ''; display: block; width: 26px; height: 1px;
            background: var(--accent-gold); margin-bottom: 6px;
          }
        }
        @media (max-width: 1159.9px) {
          .tr-note { display: block; margin: 0 0 2px; }
        }
        .tr-w { cursor: pointer; border-radius: 3px; }
        .tr-w:hover { background: rgba(201, 168, 108, 0.25); }
        .tr-w.tr-active { background: #f6e7c3; box-shadow: 0 0 0 2px #f6e7c3; }
        .tr-w.tr-ev { font-style: italic; color: var(--text-muted, #8a7f70); }
      `}</style>
    </div>
  );
}
