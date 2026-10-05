"use client";

import { useEffect, useState } from "react";

// Working list compiled by a Claude Code session from repos, handoffs, the ops board and mail.
// To refresh: edit SECTIONS and UPDATED. Ticks are saved in this browser only (localStorage).

const UPDATED = "Mon 5 Oct 2026";

type Area = "MakeMode" | "Legal" | "Source Library" | "Folium" | "TU Delft" | "Cloudlayer" | "Ops";

type Item = {
  id: string;
  area: Area;
  text: string;
  note?: string;
  href?: string;
};

type Section = {
  title: string;
  why: string;
  items: Item[];
};

const SL = "https://github.com/Embassy-of-the-Free-Mind/sourcelibrary-v2/pull/";
const MM = "https://github.com/JDerekLomas/makemode/pull/";
const CL = "https://github.com/JDerekLomas/cloudlayer/pull/";

const SECTIONS: Section[] = [
  {
    title: "Today",
    why: "These unblock other people or have a date on them.",
    items: [
      {
        id: "de-split",
        area: "Legal",
        text: "Get Emma's answer on the founder split, then send redline v3 to Delft Enterprises",
        note: "Send it to Judith, cc Jelle Post and Emma. The file is in makemode-private, dated 2026-09-30, v3. Everything else in the round waits on this.",
      },
      {
        id: "mdz",
        area: "Source Library",
        text: "Reply to MDZ Munich with our server IPs",
        note: "They offered temporary IP-based IIIF access (2 Oct).",
        href: "https://mail.google.com/mail/?authuser=derek@sourcelibrary.org#all/thread-f:1877840467797437756",
      },
      {
        id: "lighten",
        area: "Folium",
        text: "Reply to LightEn and book the data-format working meeting",
        note: "Jess and Laura both replied on 1–2 Oct, unread.",
        href: "https://mail.google.com/mail/?authuser=derek@sourcelibrary.org#all/thread-f:1877132055967677357",
      },
      {
        id: "ask-researcher",
        area: "TU Delft",
        text: "Answer Aadjan: volunteer for the 'Ask a Researcher' workshop tomorrow (6 Oct)?",
      },
      { id: "tim", area: "TU Delft", text: "Fill in your TIM hours", note: "Two reminders, plus Ryan Bugeja's mail." },
      {
        id: "reviews",
        area: "TU Delft",
        text: "Accept or decline two review invites",
        note: "Acta Psychologica (today) and the Design Issues reminder (Noto paper).",
      },
    ],
  },
  {
    title: "This week: calendar",
    why: "Prepare these before the day.",
    items: [
      {
        id: "eternity",
        area: "Source Library",
        text: "Wed 7 Oct, 10:00: Eternity Foundation meeting",
        note: "Samantha (Everest) is confirming. You asked whether Francis can come Wednesday evening. Prep: the canon-quality write-up, PR #5865.",
        href: SL + "5865",
      },
      {
        id: "nov18",
        area: "TU Delft",
        text: "18 Nov clash: Timothy Houtman's PhD defence and Ilona van de Kooi's Justice by Design Lab event",
        note: "Answer Ilona's two mails (30 Sep, 2 Oct).",
      },
    ],
  },
  {
    title: "This week: legal and money",
    why: "These are on the critical path to the Delft Enterprises closing and the TU Delft pilot.",
    items: [
      { id: "barentskrans", area: "Legal", text: "Answer BarentsKrans: holdings, the STAK, and booking the ID visit in The Hague" },
      { id: "tax-nl", area: "Legal", text: "Book a Dutch tax adviser (founders' own counsel)" },
      {
        id: "cpa",
        area: "Legal",
        text: "Book a US CPA before any notary date is set",
        note: "The 83(b) election has a 30-day clock that starts at the notary.",
      },
      {
        id: "ppl-ip",
        area: "Legal",
        text: "Playpower IP confirmation: fill in the blanks and find a signatory who isn't you",
      },
      {
        id: "tud-dpa",
        area: "Legal",
        text: "Send the corrected TU Delft pilot pack (DPA, BIA, pilot agreement) to Jelle van de Rostijne and Arvind",
      },
      { id: "ancillary", area: "Legal", text: "Chase the faculty for the ancillary-activities approval" },
      { id: "preinc", area: "Legal", text: "Rebuild the ~€20k pre-incorporation spend from invoices (EURO-LOG)" },
      {
        id: "folium-invoicing",
        area: "Folium",
        text: "Invoicing: Futures Atlas (Laura, Deborah Nas) and the Foresight Lab Part 2 proposal (Erik Schoorlemmer)",
      },
    ],
  },
  {
    title: "Replies owed",
    why: "People who are waiting on you, oldest first.",
    items: [
      { id: "jasha", area: "Source Library", text: "Jasha (EFM): details of the TU Delft grant for their master plan", note: "Waiting since 30 Sep." },
      { id: "pisters", area: "Source Library", text: "Patricia Pisters: 'alchemical shadows'" },
      { id: "jafri", area: "Source Library", text: "Raza Jafri: a chat about AI and mysticism" },
      { id: "mancini", area: "Source Library", text: "Claudia Mancini: 'CM Vibe Coding'" },
      { id: "jeff", area: "Source Library", text: "Jeff Love: the Source Library quality paper" },
      { id: "laura-fb", area: "Folium", text: "Laura KM: feedback on Futures Atlas and input for DeltAI" },
      { id: "rubrics", area: "TU Delft", text: "The 'Rubrics BSc Eind Project IO' thread (Brinkman, Daalhuizen, Buszydlik)" },
      { id: "intern", area: "TU Delft", text: "Internship/thesis inquiry from a Utrecht MSc student" },
      { id: "helma", area: "TU Delft", text: "Helma Torkamaan: check-in" },
    ],
  },
  {
    title: "Things you already decided but still have to do yourself",
    why: "Claude sessions finished their part. The rest needs you, your login or your name.",
    items: [
      {
        id: "refs",
        area: "Source Library",
        text: "Download the QC reference editions through the TU Delft library",
        note: "Ambix request already in progress. Save to sourcelibrary-ops/evals/refs-private/editions/.",
      },
      { id: "84000", area: "Source Library", text: "Send the 84000 ask for a Tibetan reader (40 leaves, about 2 hours)", note: "Draft is in Gmail." },
      {
        id: "picker",
        area: "Source Library",
        text: "Tick the personal-update letter list, then press Done",
        note: "Untick Hensel and Ritman first.",
        href: "https://claude.ai/artifact/G8JD6EtrWxGMPhKq6orqsn",
      },
    ],
  },
  {
    title: "Decisions and merges: sessions are waiting on a click",
    why: "Each one is ready. Merge it, close it, or say no.",
    items: [
      { id: "mm1207", area: "MakeMode", text: "PR #1207: TU Delft rules library at /law/tud", note: "Eval passed 32/32.", href: MM + "1207" },
      {
        id: "sl-queue",
        area: "Source Library",
        text: "Decisions queue: Clef shift repairs (cap $60) and the Neyphug Kanjur retranslation (~$1.30)",
        note: "Run /decisions in sourcelibrary and answer 'defaults'.",
      },
      { id: "sl5294", area: "Source Library", text: "PR #5294: Syriac disclosure wording (public copy)", href: SL + "5294" },
      {
        id: "sl-copy",
        area: "Source Library",
        text: "Public-copy holds: #5863 how-it-works, #5850 illustrated edition, #5784 human ceiling, #5404 share card",
        href: "https://github.com/Embassy-of-the-Free-Mind/sourcelibrary-v2/pulls?q=is%3Aopen+label%3Atier%3Ahold",
      },
      {
        id: "sl-deps",
        area: "Source Library",
        text: "Dependency bumps #5856–#5860: Stripe and MongoDB are major versions, so don't merge them blind",
        href: SL + "5860",
      },
      { id: "sl-tengyur", area: "Source Library", text: "Publish the Tengyur draft or not (#5497, figures in PR #5788)", href: SL + "5788" },
      { id: "sl-mongol", area: "Source Library", text: "Mongolian Kanjur: can it be read by machine before we pay to OCR 83K pages?" },
      {
        id: "cl-holds",
        area: "Cloudlayer",
        text: "HOLD PRs #293 (nav and site map) and #310 (poles)",
        href: CL + "293",
      },
      {
        id: "cl-globe",
        area: "Cloudlayer",
        text: "Look at the globe for a minute: does the lightning move with the clouds?",
        href: "https://earthai-storm.vercel.app/globe/",
      },
      {
        id: "mm-stale",
        area: "MakeMode",
        text: "Stale PRs: merge or close #1194 (homepage), #1038, #1019, #1020, #1021",
        href: "https://github.com/JDerekLomas/makemode/pulls",
      },
      { id: "kaart", area: "MakeMode", text: "Open Emma's product map (kaart/index.html in the makemode repo)" },
    ],
  },
  {
    title: "When you have ten minutes",
    why: "Nothing breaks today, but each gets worse with time.",
    items: [
      { id: "supabase", area: "Ops", text: "Supabase 'security vulnerabilities detected' alert (29 Sep)" },
      { id: "myhr", area: "TU Delft", text: "MyHR: outstanding tasks" },
      {
        id: "bg-dead",
        area: "Ops",
        text: "72 background sessions died in the last 7 days. Check the ones the sweep can't revive",
        note: "Run `claude agents` in a terminal.",
      },
      { id: "law-next", area: "MakeMode", text: "Law chat, next step: the #1199 fill-ins (31 of 62 founder questions answered in full)" },
      { id: "delft-course", area: "Folium", text: "AI literacy course for lecturers: idle since 23 Sep, decide whether to pick it up" },
    ],
  },
];

const AREA_COLOR: Record<Area, string> = {
  MakeMode: "var(--accent-rust)",
  Legal: "var(--accent-gold)",
  "Source Library": "var(--accent-sage)",
  Folium: "var(--accent-violet)",
  "TU Delft": "var(--accent-slate)",
  Cloudlayer: "var(--accent-slate)",
  Ops: "var(--text-muted)",
};

const STORE_KEY = "todo-done-v1";

export default function TodoPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      // storage blocked: ticks just won't persist
    }
  }, []);

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  const all = SECTIONS.flatMap((s) => s.items);
  const doneCount = all.filter((i) => done[i.id]).length;

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10">
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
            Updated {UPDATED}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4">
            To do
          </h1>
          <div className="flex items-center gap-4 font-sans text-sm text-[var(--text-secondary)]">
            <span>
              {doneCount} of {all.length} done
            </span>
            <button
              onClick={() => setHideDone((v) => !v)}
              className="underline underline-offset-4 decoration-[var(--border-medium)] hover:text-[var(--accent-rust)]"
            >
              {hideDone ? "Show done" : "Hide done"}
            </button>
          </div>
          <div className="mt-3 h-1 w-full bg-[var(--border-light)]">
            <div
              className="h-1 bg-[var(--accent-rust)] transition-all"
              style={{ width: `${all.length ? (doneCount / all.length) * 100 : 0}%` }}
            />
          </div>
        </header>

        {SECTIONS.map((section, si) => {
          const items = section.items.filter((i) => !(hideDone && done[i.id]));
          const left = section.items.filter((i) => !done[i.id]).length;
          return (
            <section key={section.title} className="mb-10">
              <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-medium)] pb-2 mb-1">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--text-primary)]">
                  <span className="text-[var(--text-faint)] mr-2">{si + 1}</span>
                  {section.title}
                </h2>
                <span className="font-sans text-xs text-[var(--text-muted)] whitespace-nowrap">{left} left</span>
              </div>
              <p className="font-sans text-sm text-[var(--text-muted)] mb-3">{section.why}</p>
              <ul>
                {items.map((item) => {
                  const isDone = !!done[item.id];
                  return (
                    <li key={item.id} className="border-b border-[var(--border-light)]">
                      <label className="flex gap-3 py-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggle(item.id)}
                          className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent-rust)]"
                        />
                        <span className="min-w-0">
                          <span
                            className="font-sans text-[10px] uppercase tracking-wider mr-2"
                            style={{ color: AREA_COLOR[item.area] }}
                          >
                            {item.area}
                          </span>
                          <span
                            className={
                              isDone
                                ? "text-[var(--text-faint)] line-through"
                                : "text-[var(--text-primary)]"
                            }
                          >
                            {item.text}
                          </span>
                          {item.href && (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-sans text-xs ml-2 text-[var(--accent-rust)] hover:text-[var(--accent-rust-hover)]"
                            >
                              open ↗
                            </a>
                          )}
                          {item.note && !isDone && (
                            <span className="block font-sans text-sm text-[var(--text-muted)] mt-1">{item.note}</span>
                          )}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <footer className="font-sans text-xs text-[var(--text-faint)] mt-12">
          Compiled from repos, Claude Code handoffs, the ops board and mail. Ticks are saved in this browser only.
        </footer>
      </div>
    </div>
  );
}
