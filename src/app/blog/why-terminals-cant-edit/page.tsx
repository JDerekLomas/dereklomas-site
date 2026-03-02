import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LikeButton from "@/components/LikeButton";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import CusdisComments from "@/components/CusdisComments";

const SECTIONS = [
  { id: "the-character-grid", title: "The Character Grid" },
  { id: "the-blindness-problem", title: "The Blindness Problem" },
  { id: "why-different", title: "Why This Is Different from Every Other Application" },
  { id: "two-programs-problem", title: "The Two Programs Problem" },
  { id: "highlight-to-delete", title: "\u201cHighlight to Delete\u201d Is Even Harder" },
  { id: "partial-solutions", title: "Partial Solutions" },
  { id: "what-would-fix-it", title: "What Would Actually Fix It" },
  { id: "living-with-the-grid", title: "Living with the Grid" },
];

export const metadata: Metadata = {
  title: "Why You Can't Click to Place Your Cursor in a Terminal",
  description:
    "Terminal emulators don't know what's on screen. They draw characters on a grid and forward keystrokes. That architectural decision from 1978 is why basic text editing feels broken in 2026.",
  openGraph: {
    title: "Why You Can't Click to Place Your Cursor in a Terminal",
    description:
      "The 1978 architecture decision that still shapes how 50 million developers work.",
    type: "article",
    authors: ["Derek Lomas"],
  },
};

export default function WhyTerminalsCantEditPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <article className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-rust transition-colors text-sm font-sans no-underline mb-10 block"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="label mb-4">Technical Essay</p>
          <h1 className="font-display text-3xl md:text-[42px] md:leading-[1.15] font-medium text-primary mb-6">
            Why You Can&rsquo;t Click to Place Your Cursor in a Terminal
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            The 1978 architecture decision that still shapes how 50 million developers work.
          </p>
          <p className="font-sans text-sm text-muted">
            2 March 2026 &middot; 10 min read
          </p>
          <div className="mt-8 rounded-lg overflow-hidden">
            <Image src="/images/blog/terminal.png" alt="Retro CRT terminal with glowing green text" width={800} height={400} className="w-full" />
          </div>
        </header>

        <TableOfContents sections={SECTIONS} />

        {/* Body */}
        <div className="prose">
          <p>
            I had used a terminal maybe a few dozen times before November 2024. Then Claude Code happened,
            and now I spend more time in the terminal than in any other application &mdash; including my
            web browser. On any given day I have 15 to 25 terminal windows open, each running
            a different AI coding session.
          </p>

          <p>
            And every day, I try to click somewhere in the text I&rsquo;m typing and place my cursor
            there. It doesn&rsquo;t work. I try to highlight a word and type over it. That doesn&rsquo;t
            work either. These are things I do in literally every other application on my computer &mdash;
            my browser, my text editor, my notes app, even the search bar in Finder. But the terminal,
            the application I now use the most, can&rsquo;t do it.
          </p>

          <p>
            I went looking for a terminal that could. I tried Ghostty, iTerm2, Warp, Kitty. None of them
            support it. I asked on Hacker News. The responses split into two camps: &ldquo;that&rsquo;s
            not the terminal&rsquo;s job&rdquo; and &ldquo;of course it&rsquo;s the terminal&rsquo;s
            job.&rdquo; Both are right, and the reason both are right reveals something genuinely strange
            about how we build software in 2026.
          </p>

          <h2 id="the-character-grid">The Character Grid</h2>

          <p>
            A terminal emulator is, at its core, a screen made of characters. Think of a spreadsheet
            where every cell is exactly one character wide. The terminal has one job: receive bytes from
            a program, interpret them as characters and control codes, and draw them on the grid.
          </p>

          <p>
            This design comes from the{" "}
            <a href="https://en.wikipedia.org/wiki/VT100" target="_blank" rel="noopener noreferrer">DEC VT100</a>,
            released in 1978. The VT100 was a physical device &mdash;
            a screen and keyboard connected to a remote computer via a{" "}
            <a href="https://bitsavers.org/pdf/dec/terminal/vt100/EK-VT100-UG-003_VT100_User_Guide_Jun82.pdf" target="_blank" rel="noopener noreferrer">serial cable</a>.
            The computer sent characters down the wire. The VT100 drew them. The user typed. The VT100 sent those keystrokes
            back up the wire. That was the entire contract.
          </p>

          <p>
            Every modern terminal emulator &mdash; Ghostty, iTerm2, Terminal.app, Windows Terminal,
            Kitty, Alacritty &mdash; still implements this same contract. They are software pretending
            to be a VT100. The program running inside the terminal (your shell, vim, python, Claude Code)
            sends{" "}
            <a href="https://invisible-island.net/xterm/ctlseqs/ctlseqs.html" target="_blank" rel="noopener noreferrer">escape codes</a>{" "}
            like <code>\e[12;5H</code> meaning
            &ldquo;move the cursor to row 12, column 5&rdquo; or <code>\e[31m</code> meaning
            &ldquo;switch to red text.&rdquo; The terminal obeys. It doesn&rsquo;t ask why.
          </p>

          <h2 id="the-blindness-problem">The Blindness Problem</h2>

          <p>
            Here is the fundamental issue: <strong>the terminal emulator does not know what is on
            screen.</strong>
          </p>

          <p>
            That sounds absurd &mdash; it&rsquo;s drawing the screen, how can it not know? But the
            terminal only knows what characters are at which grid positions. It does not know what those
            characters <em>mean</em>. When you see this:
          </p>

          <div
            style={{
              background: "var(--bg-dark)",
              color: "#4ade80",
              fontFamily: "var(--font-inter), monospace",
              padding: "1.5em",
              borderRadius: "8px",
              fontSize: "14px",
              lineHeight: "1.6",
              margin: "2em 0",
            }}
          >
            <span style={{ color: "#60a5fa" }}>derek@mac</span>{" "}
            <span style={{ color: "var(--accent-gold)" }}>~/sourcelibrary</span>{" "}
            $ git commit -m &quot;fix the bug&quot;
          </div>

          <p>
            You see a prompt, a command, and a string argument. The terminal sees 58 characters on
            row 24. It doesn&rsquo;t know where the prompt ends. It doesn&rsquo;t know
            that <code>$</code> is a prompt delimiter. It doesn&rsquo;t know which characters you typed
            and which were printed by the system. It doesn&rsquo;t know
            that <code>fix the bug</code> is inside a quoted string that you might want to edit.
          </p>

          <p>
            So when you click on the &ldquo;b&rdquo; in &ldquo;bug,&rdquo; the terminal receives a
            mouse event at column 52, row 24. Now what? To place a cursor there, it would need to:
          </p>

          <ol style={{ textIndent: 0, textAlign: "left", paddingLeft: "1.25em", lineHeight: "1.8" }}>
            <li>Figure out that column 52 is inside editable text (not part of the prompt, not output from a previous command)</li>
            <li>Determine that the program currently accepting input is zsh (not vim, not python, not Claude Code)</li>
            <li>Calculate how many arrow-key presses it would take to move zsh&rsquo;s cursor from its current position to that location</li>
            <li>Send those fake keystrokes to zsh</li>
            <li>Hope zsh interprets them correctly</li>
          </ol>

          <p>
            Step 1 is the wall. The terminal genuinely cannot distinguish editable text from anything
            else on screen. It&rsquo;s all just characters on a grid.
          </p>

          <h2 id="why-different">Why This Is Different from Every Other Application</h2>

          <p>
            In a web browser, when you click on a text input, the browser owns that input field. It
            knows the field exists, where it starts and ends, what text is in it, and where your cursor
            should go. The browser is both the renderer and the editor.
          </p>

          <p>
            In a terminal, the renderer (the terminal emulator) and the editor (the shell) are{" "}
            <a href="https://www.linusakesson.net/programming/tty/" target="_blank" rel="noopener noreferrer">different
            programs communicating through a pipe</a>. The terminal renders but doesn&rsquo;t edit.
            The shell edits but doesn&rsquo;t render. Neither has the full picture.
          </p>

          <p>
            It&rsquo;s as if your web browser could only display a video feed of a remote desktop,
            and every click had to be translated into a sequence of keyboard shortcuts and sent to the
            remote machine. You&rsquo;d never expect click-to-edit to work in that setup. But that&rsquo;s
            exactly what a terminal is.
          </p>

          <h2 id="two-programs-problem">The Two Programs Problem</h2>

          <p>
            The situation gets worse when you consider that the terminal doesn&rsquo;t even know
            which program is running inside it. When you launch a terminal, it starts your shell (zsh,
            bash, fish). But the shell launches other programs &mdash; git, python, vim, ssh &mdash; and those
            programs take over the terminal. Each one handles input differently.
          </p>

          <p>
            In zsh, pressing the left arrow moves your cursor left in your command. In vim, pressing the
            left arrow (or <code>h</code>) moves left in normal mode but inserts a character in insert
            mode. In python&rsquo;s REPL, the left arrow works, but only on the current line. In ssh,
            the left arrow is forwarded to whatever&rsquo;s running on the remote machine.
          </p>

          <p>
            The terminal can&rsquo;t implement &ldquo;click to place cursor&rdquo; without knowing which
            program is running and how that program handles cursor movement. And no reliable mechanism
            exists for the terminal to ask.
          </p>

          <h2 id="highlight-to-delete">&ldquo;Highlight to Delete&rdquo; Is Even Harder</h2>

          <p>
            Click-to-place-cursor is hard. Select-and-type-to-replace is nearly impossible.
          </p>

          <p>
            In a text editor, selecting text and pressing a key replaces the selection. This requires
            the application to know: what text is selected, that the user intends to replace it, and how
            to delete the old text and insert the new text atomically. The terminal has none of this.
          </p>

          <p>
            The terminal can do text selection (drag to highlight, Cmd+C to copy). But that selection
            lives entirely in the terminal emulator. The shell has no idea anything is selected.
            Selection in the terminal is a screen-level operation, like selecting text in a screenshot.
            It doesn&rsquo;t correspond to any editable state in the running program.
          </p>

          <p>
            To implement &ldquo;highlight and delete,&rdquo; the terminal would need to translate a
            visual selection on its character grid into the correct sequence of shell editing commands
            (move cursor to start, hold shift, move to end, delete) &mdash; which vary by program, mode,
            and configuration. It&rsquo;s the &ldquo;remote desktop video feed&rdquo; problem again, but worse.
          </p>

          <h2 id="partial-solutions">Partial Solutions</h2>

          <p>
            Some programs have chipped away at the edges of this problem:
          </p>

          <p>
            <strong>Shells can advertise prompt boundaries.</strong> The{" "}
            <a href="https://gitlab.freedesktop.org/Per_Bothner/specifications/blob/master/proposals/semantic-prompts.md" target="_blank" rel="noopener noreferrer">OSC 133 escape sequence</a>{" "}
            lets a shell tell the terminal &ldquo;the prompt ends here, user input starts here.&rdquo;{" "}
            <a href="https://iterm2.com/documentation-shell-integration.html" target="_blank" rel="noopener noreferrer">iTerm2</a>{" "}
            and Ghostty support this. It solves step 1 of the click-to-place problem &mdash; but only for
            the shell, and only when the shell has been configured to emit the sequence.
          </p>

          <p>
            <strong><a href="https://www.warp.dev/blog/why-is-the-terminal-input-so-weird" target="_blank" rel="noopener noreferrer">Warp</a> reinvented the input model.</strong> Warp treats the command input as an actual
            text editor, separate from the terminal output. You <em>can</em> click to place your cursor
            in Warp. But Warp achieves this by not being a normal terminal &mdash; it intercepts input before
            the shell sees it. This works for the shell prompt but breaks when you launch vim or ssh
            or anything else that expects raw terminal input.
          </p>

          <p>
            <strong><a href="https://sw.kovidgoyal.net/kitty/keyboard-protocol/" target="_blank" rel="noopener noreferrer">Kitty&rsquo;s keyboard protocol</a></strong> provides richer keystroke information to
            applications that opt in. This doesn&rsquo;t directly solve clicking, but it&rsquo;s a step
            toward terminals and applications having a shared understanding of input state.
          </p>

          <p>
            <strong><a href="https://invisible-island.net/xterm/ctlseqs/ctlseqs.html" target="_blank" rel="noopener noreferrer">Mouse reporting modes</a></strong> (SGR, X10) let the terminal forward mouse clicks to
            the running application. This is how vim and tmux handle mouse input &mdash; they opt in to
            receiving mouse events and implement their own click handling. But your shell doesn&rsquo;t
            do this by default, and even when it does (zsh has mouse support), the experience is spotty.
          </p>

          <h2 id="what-would-fix-it">What Would Actually Fix It</h2>

          <p>
            The real fix requires programs to tell the terminal about editable regions. Imagine an escape
            sequence like:
          </p>

          <div
            style={{
              background: "var(--bg-dark)",
              color: "#4ade80",
              fontFamily: "var(--font-inter), monospace",
              padding: "1.5em",
              borderRadius: "8px",
              fontSize: "14px",
              lineHeight: "1.6",
              margin: "2em 0",
            }}
          >
            <span style={{ color: "#78716c" }}># Hypothetical: &ldquo;editable text field starts at row 24, col 33, length 24&rdquo;</span><br />
            \e[?2048h &nbsp;{"<"}field row=24 col=33 len=24 type=text{">"}
          </div>

          <p>
            With this, the terminal could render a real input field overlay at that position. Clicking
            would work. Selection would work. The terminal would own the editing, and only send the
            final text back to the program when the user presses Enter. Like
            an <code>{"<input>"}</code> element in HTML.
          </p>

          <p>
            This is essentially what Warp does, but hardcoded for the shell prompt. A general-purpose
            protocol would let any program declare input fields &mdash; your shell, a database REPL,
            an AI coding agent asking for confirmation. Every terminal emulator could implement native
            text editing for those fields.
          </p>

          <p>
            But adoption would require every shell, every CLI tool, and every terminal to agree on the
            protocol. In an ecosystem where we&rsquo;re still arguing about whether terminals should
            support ligatures, that&rsquo;s a generational project.
          </p>

          <h2 id="living-with-the-grid">Living with the Grid</h2>

          <p>
            So here we are in 2026, using AI to write software through an interface designed for
            connecting teletypes to mainframes. The irony isn&rsquo;t lost on me. Claude Code &mdash; maybe
            the most advanced consumer of terminal I/O ever built &mdash; is still bound by the
            same character grid that constrained a DEC engineer 48 years ago.
          </p>

          <p>
            The terminal has survived this long precisely because of its simplicity. The VT100 contract
            is universal: any program that can write bytes and read keystrokes can use a terminal. That
            universality is why we still use terminals at all, instead of building bespoke GUIs for every
            tool. It&rsquo;s a lowest-common-denominator interface that happens to be good enough for
            almost everything.
          </p>

          <p>
            Almost. The one thing it&rsquo;s not good enough for is the thing every other application on
            your computer has done{" "}
            <a href="https://en.wikipedia.org/wiki/MacWrite" target="_blank" rel="noopener noreferrer">since 1984</a>:
            letting you click where you want to type.
          </p>

          <p style={{ fontStyle: "italic" }}>
            Tools like{" "}
            <a href="https://www.cmux.dev/" target="_blank" rel="noopener noreferrer">
              cmux
            </a>{" "}
            and{" "}
            <a href="https://ghostty.org/" target="_blank" rel="noopener noreferrer">
              Ghostty
            </a>{" "}
            are pushing the edges &mdash; better window management, notifications that tell you which of
            your 25 AI sessions needs attention, integrated browsers for visual feedback. They&rsquo;re
            making the terminal <em>livable</em> for the AI coding era. But the character grid remains.
            Whoever cracks the input field protocol will change how every developer on Earth works.
          </p>
          <h2>Sources</h2>

          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/VT100" target="_blank" rel="noopener noreferrer">DEC VT100</a> &mdash; Wikipedia
            </li>
            <li>
              <a href="https://bitsavers.org/pdf/dec/terminal/vt100/EK-VT100-UG-003_VT100_User_Guide_Jun82.pdf" target="_blank" rel="noopener noreferrer">VT100 User Guide</a> &mdash; DEC, 1982 (bitsavers.org)
            </li>
            <li>
              <a href="https://www.linusakesson.net/programming/tty/" target="_blank" rel="noopener noreferrer">The TTY Demystified</a> &mdash; Linus &Aring;kesson
            </li>
            <li>
              <a href="https://invisible-island.net/xterm/ctlseqs/ctlseqs.html" target="_blank" rel="noopener noreferrer">XTerm Control Sequences</a> &mdash; Thomas Dickey
            </li>
            <li>
              <a href="https://gitlab.freedesktop.org/Per_Bothner/specifications/blob/master/proposals/semantic-prompts.md" target="_blank" rel="noopener noreferrer">Semantic Prompts (OSC 133)</a> &mdash; Per Bothner
            </li>
            <li>
              <a href="https://iterm2.com/documentation-shell-integration.html" target="_blank" rel="noopener noreferrer">Shell Integration</a> &mdash; iTerm2
            </li>
            <li>
              <a href="https://www.warp.dev/blog/why-is-the-terminal-input-so-weird" target="_blank" rel="noopener noreferrer">Why Is Terminal Input So Weird?</a> &mdash; Warp
            </li>
            <li>
              <a href="https://sw.kovidgoyal.net/kitty/keyboard-protocol/" target="_blank" rel="noopener noreferrer">Keyboard Protocol</a> &mdash; Kitty
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/MacWrite" target="_blank" rel="noopener noreferrer">MacWrite</a> &mdash; Wikipedia (click-to-edit since 1984)
            </li>
          </ul>
        </div>

        {/* Engagement */}
        <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5em" }}>
          <LikeButton slug="why-terminals-cant-edit" />
          <ShareButtons
            url="https://dereklomas.me/blog/why-terminals-cant-edit"
            title="Why You Can't Click to Place Your Cursor in a Terminal"
          />
        </div>

        <CusdisComments
          pageId="why-terminals-cant-edit"
          pageUrl="https://derek-lomas.com/blog/why-terminals-cant-edit"
          pageTitle="Why You Can't Click to Place Your Cursor in a Terminal"
        />
      </article>
    </div>
  );
}
