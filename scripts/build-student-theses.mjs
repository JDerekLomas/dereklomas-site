#!/usr/bin/env node
// Parse TU Delft Pure CSV export → src/data/student-theses.json
// Source CSV: ~/Downloads/output.csv (semicolon-delimited)

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "csv-parse/sync";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = process.env.CSV ?? "/Users/dereklomas/Downloads/output.csv";
const OUT = join(__dirname, "..", "src", "data", "student-theses.json");

// Faculty/supervisors — names that appear 3+ times across the whole CSV, plus
// known TU Delft IDE faculty appearing twice (they tend to co-supervise across
// just a few theses). Anything not in this set is treated as a student.
const FACULTY_NAMES = new Set([
  // From frequency analysis (3+ appearances)
  "J.D. Lomas",
  "W.L.A. van der Maden",
  "G.M. Allen",
  "Ujwal Gadiraju",
  "Zekeriya Erkin",
  "Zekeriya  Erkin",
  "D.H.J. Epema",
  "Gerd Kortuem",
  "M.H. Sonneveld",
  "A. Bozzon",
  "P.P.M. Hekkert",
  "P. Hekkert",
  "M.A. Gielen",
  "G. Huisman",
  "I. Nicenboim",
  // Known TU Delft IDE supervisors (2 appearances, recognized faculty)
  "A.I. Keller",
  "Deborah Nas",
  "M.L. Lupetti",
  "R. Bendor",
  "R.G. Klaassen",
  "Perry den Brok",
  "Linlin Pei",
  "uwe matzat",
  "Elisa Giaccardi",
  "E. Giaccardi",
  "Elif Özcan",
  "M. Bruns",
  "S.C. Pont",
  "Karthik Mahadevan",
  "S.U. Boess",
  // Cross-faculty TU Delft supervisors
  "N. Yorke-Smith",
  "T. Keviczky",
  "Stefano Bocconi",
  "Tom Demeyer",
  "Zoltán Szlávik",
  "T. Huysmans",
  "S. Hiemstra-van Mastrigt",
  "I.M. van Zeumeren",
  "N. Cila",
  "P. Vink",
  "C. Yu",
  "Vera van der Burg",
  "C. Mazzarella",
  "Karin Peters",
  "R.A. Price",
  "T.A. Houtman",
  "A.H. Valkenhoff",
  "S. Hiemstra-van Mastrigt",
  "Pal Blanke",
  "Hui Lin",
  "Michiel  Knoppert",
  "S. Immerzeel",
]);

// Hand corrections: { uuid → student name(s) } — used when the auto-detection
// over- or under-includes names. Add entries here as you spot issues.
const STUDENT_OVERRIDES = {};

function classifyRole(roles) {
  if (roles.includes("mentor")) return "mentor";
  if (roles.includes("graduation committee member"))
    return "graduation committee";
  if (roles.includes("coach")) return "coach";
  return "supervisor";
}

function pickStudent(names) {
  const candidates = names.filter((n) => !FACULTY_NAMES.has(n));
  if (candidates.length === 1) return candidates[0];
  // Fall back: name not in the high-frequency faculty list, if any
  if (candidates.length > 1) return candidates.join(", ");
  return names.join(", ");
}

function cleanRepoLink(link) {
  // Repository link in CSV has doubled "uuid:" prefix
  return link.replace("uuid:uuid:", "uuid:");
}

function stripHtml(s) {
  return s
    .replace(/<br\s*\/?>(\s*)/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, "")
    .replace(/@en\b/g, "")
    .trim();
}

function shortenDescription(desc, max = 320) {
  const cleaned = stripHtml(desc);
  if (cleaned.length <= max) return cleaned;
  return cleaned.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

const raw = readFileSync(SRC, "utf-8");
const rows = parse(raw, {
  delimiter: ";",
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  relax_column_count: true,
});

const theses = rows
  .filter((r) => /thesis/i.test(r.publication_type))
  .map((r) => {
    const names = r.contributor_names
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    const roles = r.contributor_roles
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    const dateStr = r.publication_date ?? "";
    const year = parseInt(dateStr.slice(0, 4), 10) || null;
    const keywords = (r.filtered_keywords || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    return {
      uuid: r.uuid,
      title: r.title.replace(/\.$/, ""),
      subtitle: r.sub_title?.replace(/\.$/, "") || null,
      description: shortenDescription(r.description || ""),
      year,
      date: dateStr,
      degree: /bachelor/i.test(r.publication_type) ? "BSc" : "MSc",
      student: STUDENT_OVERRIDES[r.uuid] ?? pickStudent(names),
      derekRole: classifyRole(roles),
      keywords,
      repoUrl: cleanRepoLink(r.repository_link),
    };
  })
  .sort((a, b) => {
    if (b.year !== a.year) return (b.year ?? 0) - (a.year ?? 0);
    return (b.date || "").localeCompare(a.date || "");
  });

writeFileSync(OUT, JSON.stringify(theses, null, 2) + "\n");
console.log(`Wrote ${theses.length} theses to ${OUT}`);
console.log(`  MSc: ${theses.filter((t) => t.degree === "MSc").length}`);
console.log(`  BSc: ${theses.filter((t) => t.degree === "BSc").length}`);
console.log(`  Years: ${theses.at(-1)?.year} – ${theses[0]?.year}`);
