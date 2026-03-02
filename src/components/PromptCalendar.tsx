"use client";

import { useMemo } from "react";

type PromptCalendarProps = {
  daily: Record<string, number>;
  color: string; // e.g. "#39d353"
  sessions: number;
  prompts: number;
};

function dateStr(d: Date) {
  return d.toISOString().split("T")[0];
}

function lerp(a: string, b: string, t: number): string {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  };
  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  const c = (v1: number, v2: number) => Math.round(v1 + (v2 - v1) * t);
  return `rgb(${c(r1, r2)}, ${c(g1, g2)}, ${c(b1, b2)})`;
}

export default function PromptCalendar({ daily, color, sessions, prompts }: PromptCalendarProps) {
  const { cells, months, levels } = useMemo(() => {
    const dates = Object.keys(daily).sort();
    if (dates.length === 0) return { cells: [], months: [], levels: [color, color, color, color] };

    const start = new Date(dates[0] + "T00:00:00");
    const end = new Date(dates[dates.length - 1] + "T00:00:00");

    // Extend to full weeks
    while (start.getDay() !== 0) start.setDate(start.getDate() - 1);
    while (end.getDay() !== 6) end.setDate(end.getDate() + 1);

    // Color levels from dark to bright
    const bg = "#161b22";
    const lvls = [
      lerp(bg, color, 0.3),
      lerp(bg, color, 0.5),
      lerp(bg, color, 0.75),
      color,
    ];

    // Quartiles
    const values = Object.values(daily).sort((a, b) => a - b);
    const maxVal = values[values.length - 1];
    const q1 = maxVal * 0.25;
    const q2 = maxVal * 0.5;
    const q3 = maxVal * 0.75;

    const cellList: { date: string; count: number; level: number; dow: number; label: string }[] = [];
    const monthList: { name: string; col: number }[] = [];
    let lastMonth = -1;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const current = new Date(start);
    let col = 0;

    while (current <= end) {
      const ds = dateStr(current);
      const count = daily[ds] || 0;
      const dow = current.getDay();
      const m = current.getMonth();

      if (dow === 0 && m !== lastMonth) {
        monthList.push({ name: monthNames[m], col });
        lastMonth = m;
      }

      let level = 0;
      if (count > 0) {
        level = count > q3 ? 4 : count > q2 ? 3 : count > q1 ? 2 : 1;
      }

      const formatted = current.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      cellList.push({ date: ds, count, level, dow, label: count > 0 ? `${count} prompts on ${formatted}` : formatted });

      if (dow === 6) col++;
      current.setDate(current.getDate() + 1);
    }

    return { cells: cellList, months: monthList, levels: lvls };
  }, [daily, color]);

  const totalWeeks = cells.length > 0 ? Math.ceil(cells.length / 7) : 0;

  return (
    <div style={{ margin: "2em 0" }}>
      <div style={{ fontSize: "13px", color: "#8b949e", marginBottom: "8px", fontFamily: "var(--font-inter), sans-serif" }}>
        {sessions} sessions &middot; {prompts.toLocaleString()} prompts
      </div>
      <div style={{ overflowX: "auto", paddingBottom: "8px" }}>
        <div style={{ display: "inline-block" }}>
          {/* Month labels */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${totalWeeks}, 13px)`, gap: "3px", marginBottom: "4px", marginLeft: "30px" }}>
            {months.map((m, i) => (
              <span key={i} style={{ gridColumnStart: m.col + 1, fontSize: "10px", color: "#8b949e", fontFamily: "var(--font-inter), sans-serif" }}>
                {m.name}
              </span>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {/* Day labels */}
            <div style={{ display: "grid", gridTemplateRows: "repeat(7, 13px)", gap: "3px", marginRight: "6px", fontSize: "10px", color: "#8b949e", fontFamily: "var(--font-inter), sans-serif" }}>
              {["S", "", "T", "", "T", "", "S"].map((d, i) => (
                <span key={i} style={{ lineHeight: "13px" }}>{d}</span>
              ))}
            </div>
            {/* Grid */}
            <div
              style={{
                display: "inline-grid",
                gridTemplateRows: "repeat(7, 13px)",
                gridAutoFlow: "column",
                gridAutoColumns: "13px",
                gap: "3px",
              }}
            >
              {cells.map((cell, i) => (
                <div
                  key={i}
                  title={cell.label}
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 2,
                    background: cell.level === 0 ? "#161b22" : levels[cell.level - 1],
                    outline: "1px solid rgba(27, 31, 35, 0.06)",
                    cursor: "default",
                  }}
                />
              ))}
            </div>
          </div>
          {/* Legend */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "8px", fontSize: "11px", color: "#8b949e", fontFamily: "var(--font-inter), sans-serif" }}>
            Less
            <div style={{ width: 13, height: 13, borderRadius: 2, background: "#161b22" }} />
            {levels.map((c, i) => (
              <div key={i} style={{ width: 13, height: 13, borderRadius: 2, background: c }} />
            ))}
            More
          </div>
        </div>
      </div>
    </div>
  );
}
