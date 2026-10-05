"use client";

import { useEffect, useState } from "react";

// Working list compiled by a Claude Code session from repos, handoffs, the ops board and mail.
// To refresh: edit SECTIONS and UPDATED. Ticks are saved in this browser only (localStorage).

const UPDATED = "Mon 5 Oct 2026";

type Area = "MakeMode" | "Legal" | "Source Library" | "Folium" | "TU Delft" | "Cloudlayer" | "Ops";

type Draft = {
  to: string;
  subject?: string;
  body: string;
};

type Item = {
  id: string;
  area: Area;
  text: string;
  note?: string;
  href?: string;
  draft?: Draft;
};

type Section = {
  title: string;
  why: string;
  items: Item[];
};

const SL = "https://github.com/Embassy-of-the-Free-Mind/sourcelibrary-v2/pull/";
const MM = "https://github.com/JDerekLomas/makemode/pull/";
const CL = "https://github.com/JDerekLomas/cloudlayer/pull/";
const GMAIL = "https://mail.google.com/mail/?authuser=derek@sourcelibrary.org#all/";

const SECTIONS: Section[] = [
  {
    title: "Today",
    why: "These unblock other people or have a date on them.",
    items: [
      {
        id: "de-split",
        area: "Legal",
        text: "Get Emma's answer on the founder split, then send redline v3 to Delft Enterprises",
        note: "Send it to Judith, cc Jelle Post and Emma. The file is in makemode-private, dated 2026-09-30, v3. Everything else in the round waits on this. No draft here: that thread isn't in the mailbox I can read.",
      },
      {
        id: "mdz",
        area: "Source Library",
        text: "Reply to MDZ Munich: their 9-question form for IP-based IIIF access",
        note: "Check point 9 before sending. It has to match how the site really shows BSB images.",
        href: GMAIL + "thread-f:1877840467797437756",
        draft: {
          to: "mdz@bsb-muenchen.de (reply in thread, cc team@sourcelibrary.org)",
          body: `Dear MDZ team,

Thank you for the quick and helpful reply. Here is the information you asked for.

1. Full name: Derek Lomas (Dr. James Derek Lomas)
2. E-mail: derek@sourcelibrary.org
3. Institution: SourceLibrary.org, a project of the Embassy of the Free Mind (Bibliotheca Philosophica Hermetica), Keizersgracht 123, Amsterdam
4. Project title: SourceLibrary.org: open translations of early printed books and manuscripts
5. Description: SourceLibrary.org makes early printed books and manuscripts readable to people who do not read Latin, Greek or the other historical languages they were written in. Each page image is shown beside a transcription and an English translation, published openly (CC BY-SA 4.0), with every volume credited and linked to its holding library. About 14,000 volumes come from the BSB digital collections. To keep each translation checkable against the exact scan it was made from, we keep a preservation copy of every page image. For the BSB volumes about 3.8 million page images are still missing from that copy, and we would like to complete it without putting unwanted load on your servers.
6. Other institutions: none. The project is run by the Embassy of the Free Mind in Amsterdam.
7. Data: page images only (no OCR), at full resolution through the IIIF Image API; about 3.8 million images from about 14,000 volumes. We can send the list of identifiers.
8. IP address: 46.224.122.120 (one server; requests carry a contact User-Agent).
9. Confirmed: we will not pass the downloaded files on to third parties. They are used only within the project described above: kept as preservation copies, used to produce the transcriptions and translations, and shown on sourcelibrary.org next to the translation, with a credit and a link to the record on digitale-sammlungen.de, as we do now.

You are welcome to publish points 1, 3, 4 and 5 on the BSB website.

We will keep to any rate, hours and conditions you set, and stop at once if the load causes problems.

With thanks and best regards,
Derek Lomas`,
        },
      },
      {
        id: "erik",
        area: "Folium",
        text: "Answer Erik Schoorlemmer: who Laura is, and which project the Futures Atlas budget is booked on",
        note: "Deborah has said you are the budget owner and must arrange it, so this is on you. Fill in the project number. If Laura invoices through Folium, say so in the email, because you would be the budget owner paying your own company. Ryan and Erik need that to check the conditions.",
        draft: {
          to: "Erik Schoorlemmer; cc Ryan Bugeja, Deborah Nas",
          subject: "Re: Foresight Lab Part 2 - Proposal & Invoicing Questions",
          body: `Hi Erik,

Sorry for the slow answer, and thanks for picking this up.

Laura KM is an independent designer and developer who has built the Futures Atlas (futures-atlas.com) with us over the past months: a collection of speculative-design projects, tools and prototypes about quantum, AI and compute. It was funded from the first round of the QDNL / CQS funds that I hold as budget owner.

The proposal Laura sent is the second round of the same work: 10 months at €5,000 per month, €50,000 in total, booked on the same QDNL / CQS project (project number: ____). Deborah and I have approved the plan, the budget and the timeline.

What we would like to know from you and Ryan:
- whether this fits the conditions of that funding, and whether it needs a purchase order through Basware;
- whether monthly invoices against one order work best;
- whether small running costs (AI credits, social media) can be reimbursed on receipts, so they don't eat into the work budget.

Happy to sit down for 15 minutes this week if that's quicker. I'm away from 10 to 22 October.

Best,
Derek`,
        },
      },
      { id: "tim", area: "TU Delft", text: "Enter your TIM hours: nothing since 30 June", note: "You told Ryan on 2 Oct you were on it." },
      {
        id: "reviews",
        area: "TU Delft",
        text: "Answer two review invitations",
        note: "Acta Psychologica: 'Colour Harmony in 3D Scenes Is a Scene-Level Judgement', right in your harmony work. Deadline is 21 days after you accept, and you are away 10–22 Oct, so decide today. Design Issues (Noto paper): the due date, 10 July, has passed, so decline. Text below.",
        draft: {
          to: "Design Issues (decline link in the Scholastica reminder)",
          body: `Dear Wendy and the Editors,

Thank you for thinking of me. I'm sorry for the late reply: I'm not able to take on this review in time, so I will decline so that you can invite someone else. I hope it finds a good reviewer.

Best regards,
Derek Lomas`,
        },
      },
    ],
  },
  {
    title: "This week: calendar",
    why: "Prepare these before the day.",
    items: [
      { id: "fa-meeting", area: "Folium", text: "Tue 6 Oct, 16:00: Futures Atlas meeting with everyone", note: "Per Laura's 2 Oct mail." },
      {
        id: "eternity",
        area: "Source Library",
        text: "Wed 7 Oct, 10:00: Eternity Foundation meeting",
        note: "You proposed this time to Samantha (Everest) on 3 Oct and asked whether Francis can come Wednesday evening. Confirm once she answers. Prep: PR #5865, the canon-quality write-up.",
        href: SL + "5865",
      },
      {
        id: "oct9",
        area: "Source Library",
        text: "Thu 9 Oct, 15:00–18:00: CM Vibe Coding at the Embassy, with Moral Panic filming around it",
        note: "Accept Chiara's calendar invite. You told Raza Jafri the 9th works. Patricia Pisters thinks you meant the 7th: see her reply under Replies owed.",
      },
      { id: "away", area: "Ops", text: "Away 10–22 October", note: "Every reply below that schedules something should point past the 22nd." },
    ],
  },
  {
    title: "This week: legal and money",
    why: "These are on the critical path to the Delft Enterprises closing and the TU Delft pilot. Best done before you leave on the 10th.",
    items: [
      { id: "barentskrans", area: "Legal", text: "Answer BarentsKrans: holdings, the STAK, and booking the ID visit in The Hague" },
      { id: "tax-nl", area: "Legal", text: "Book a Dutch tax adviser (founders' own counsel)" },
      {
        id: "cpa",
        area: "Legal",
        text: "Book a US CPA before any notary date is set",
        note: "The 83(b) election has a 30-day clock that starts at the notary.",
      },
      { id: "ppl-ip", area: "Legal", text: "Playpower IP confirmation: fill in the blanks and find a signatory who isn't you" },
      {
        id: "tud-dpa",
        area: "Legal",
        text: "Send the corrected TU Delft pilot pack (DPA, BIA, pilot agreement) to Jelle van de Rostijne and Arvind",
      },
      { id: "ancillary", area: "Legal", text: "Chase the faculty for the ancillary-activities approval" },
      { id: "preinc", area: "Legal", text: "Rebuild the ~€20k pre-incorporation spend from invoices (EURO-LOG)" },
    ],
  },
  {
    title: "Replies owed",
    why: "People who are waiting on you. Each one has a draft: copy it, adjust, send.",
    items: [
      {
        id: "pisters",
        area: "Source Library",
        text: "Patricia Pisters: she thinks you meant the 7th at 17:30, and asks about a ticket",
        note: "If you are also going on the 7th, add a line saying so.",
        draft: {
          to: "Patricia Pisters (p.p.r.w.pisters@uva.nl)",
          subject: "Re: alchemical shadows",
          body: `Hi Patricia,

I meant Thursday 9 October: a vibe coding session at the Embassy, 15:00 to 18:00. Come by whenever suits you. I'll check with the Embassy whether you need a ticket and let you know.

Congratulations on the book! February is close. And yes, I would love to come and talk about AI at Media Studies some time. Let's find a date after 22 October, when I'm back from a trip.

Hope to see you Thursday,
Derek`,
        },
      },
      {
        id: "jasha",
        area: "Source Library",
        text: "Jasha (EFM): details of the TU Delft grant, for their master plan",
        note: "Waiting since 30 Sep. I couldn't find which grant you discussed on Saturday, so the draft proposes a short meeting instead of guessing. Add the grant name if you have it.",
        href: GMAIL + "thread-f:1877741306731994411",
        draft: {
          to: "Jasha van der Wel; cc Marta, Sara, Chiara (as on his mail)",
          subject: "Re: Grant TU Delft",
          body: `Hi Jasha,

Sorry for the slow answer. The grant is easier to walk through together than by email: what it can pay for, the deadline, and what the Embassy would need to commit, so that the master plan starts from the real conditions.

Could we take 30 minutes at the Embassy this week? Thursday before the vibe coding session at 15:00 would work for me. I'm away from 10 to 22 October.

Best,
Derek`,
        },
      },
      {
        id: "jeff",
        area: "Source Library",
        text: "Jeff Love: his comments on the quality paper",
        note: "He suggests Tibetan/underserved languages, SIGHUM and Speakable as venues, and a 'drop in an edition to collate' mechanism (CollateX). That last idea fits the private reference-edition work (#5488).",
        draft: {
          to: "Jeff Love (J.S.Love@tudelft.nl)",
          subject: "Re: Source Library Quality Paper",
          body: `Hi Jeff,

Thank you for reading it so closely. This is exactly the kind of push I was hoping for.

The collation idea is great. We are already building a private set of modern editions to check our transcriptions against, and a way for people who know an existing edition to drop it in, with something like CollateX lining it up against our text, would turn that into something the community can grow. Given your dissertation on textual deviation between witnesses, I would love to design it with you.

SIGHUM and Speakable are good tips too. Tibetan is where we have the most to show right now.

Coffee this week? I'm away from 10 to 22 October, so otherwise the week after.

Derek`,
        },
      },
      {
        id: "ilona",
        area: "TU Delft",
        text: "Ilona van de Kooi: her recap of your call, and her two questions for 18 Nov",
        note: "She asks whether to invite your students herself and is planning a panel. Timothy Houtman's PhD defence is the same day, 12:30–14:00, so tell her the afternoon slot is tight.",
        draft: {
          to: "Ilona van de Kooi; cc emma@makemode.eu",
          subject: "Re: Our happy conversation and ideas for 18 November",
          body: `Hi Ilona,

Thank you for the lovely summary. You captured it better than I said it. "Just Design It" is a great title.

On the students: please invite them personally. That lands better than a forward from me. I'll mention it in class too and send you the names of a few who would be a good fit.

On the day: I'm glad to help with the hackathon. One constraint: a PhD defence I need to attend runs 12:30–14:00 that day, so I can join from about 14:30. For the panel, I agree on avoiding an all-male line-up, so please don't hold a place for me if a better-balanced panel needs it. Emma would also be a great voice on the AI side, and MakeMode can give teams working tools for the afternoon.

I'm away 10–22 October. After that, happy to help with the AI setup for the teams.

Best,
Derek`,
        },
      },
      {
        id: "laura-fa",
        area: "Folium",
        text: "Laura KM: you asked 'did this align?' and she answered",
        note: "Plan, budget and timeline are approved by Deborah and Diederick. Six projects are live. The ball on the Rixt workshop is with Deborah.",
        draft: {
          to: "Laura KM",
          subject: "Re: Feedback on Futures Atlas & some input for DeltAI",
          body: `Yes, that aligns. Thanks for the clear write-up.

Agree on the workshops: let's give Mike's fresh ideas a real try rather than polishing the Rixt version further. I'm answering Erik today so the invoicing gets moving. See you Tuesday at 4.

Derek`,
        },
      },
      {
        id: "lighten",
        area: "Folium",
        text: "LightEn: Jess will come back in about two weeks with their scope document",
        note: "No meeting to book yet. Just thank them for the deck and tell them when you're away.",
        href: GMAIL + "thread-f:1877132055967677357",
        draft: {
          to: "Jessica Clayton; cc Charlotte Cockle, KDame@light-en.org, Laura, Mike",
          subject: "Re: Intro | Folium x LightEn",
          body: `Hi Jess,

Thank you for the deck, and for the kind words about the site. That sounds like a good plan. A heads-up for scheduling: I'm away from 10 to 22 October, so the week of the 26th onward is ideal for the next meeting. Laura and Mike can of course pick up anything before then.

Good luck with the school commitments, and talk soon.

Derek`,
        },
      },
      {
        id: "intern",
        area: "TU Delft",
        text: "Ernst Hupkes (Utrecht MSc): second ask about an internship or thesis",
        note: "Say no kindly if there's no room, but answer either way. This draft offers a short call after your trip.",
        draft: {
          to: "e.hupkes@students.uu.nl",
          subject: "Re: Inquiry about internship/thesis opportunities",
          body: `Dear Ernst,

Thank you for following up, and sorry for the slow reply. I'm happy to have a short call. I'm travelling from 10 to 22 October, so could we do 20 minutes in the week of 26 October? Send me two or three times that suit you.

It would help if you could bring a paragraph on what you would like to study, and on how it connects to Positive AI or wellbeing.

Best regards,
Derek Lomas`,
        },
      },
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
      { id: "cl-holds", area: "Cloudlayer", text: "HOLD PRs #293 (nav and site map) and #310 (poles)", href: CL + "293" },
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

function DraftBox({ draft }: { draft: Draft }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked: the text is still selectable
    }
  }

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-sans text-xs uppercase tracking-wider text-[var(--accent-rust)] hover:text-[var(--accent-rust-hover)]"
      >
        {open ? "Hide reply" : "Draft reply"}
      </button>
      {open && (
        <div className="mt-2 border border-[var(--border-medium)] bg-[var(--bg-warm)] p-3">
          <div className="flex items-start justify-between gap-3 font-sans text-xs text-[var(--text-muted)] mb-2">
            <div className="min-w-0">
              <div>To: {draft.to}</div>
              {draft.subject && <div>Subject: {draft.subject}</div>}
            </div>
            <button
              onClick={copy}
              className="shrink-0 border border-[var(--border-medium)] px-2 py-1 text-[var(--text-primary)] hover:border-[var(--accent-rust)]"
            >
              {copied ? "Copied" : "Copy text"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-[family-name:var(--font-newsreader)] text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {draft.body}
          </pre>
        </div>
      )}
    </div>
  );
}

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
                    <li key={item.id} className="border-b border-[var(--border-light)] py-3">
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggle(item.id)}
                          aria-label={item.text}
                          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--accent-rust)]"
                        />
                        <div className="min-w-0 flex-1">
                          <span
                            className="font-sans text-[10px] uppercase tracking-wider mr-2"
                            style={{ color: AREA_COLOR[item.area] }}
                          >
                            {item.area}
                          </span>
                          <span
                            onClick={() => toggle(item.id)}
                            className={
                              "cursor-pointer " +
                              (isDone ? "text-[var(--text-faint)] line-through" : "text-[var(--text-primary)]")
                            }
                          >
                            {item.text}
                          </span>
                          {item.href && (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="font-sans text-xs ml-2 text-[var(--accent-rust)] hover:text-[var(--accent-rust-hover)]"
                            >
                              open ↗
                            </a>
                          )}
                          {item.note && !isDone && (
                            <span className="block font-sans text-sm text-[var(--text-muted)] mt-1">{item.note}</span>
                          )}
                          {item.draft && !isDone && <DraftBox draft={item.draft} />}
                        </div>
                      </div>
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
