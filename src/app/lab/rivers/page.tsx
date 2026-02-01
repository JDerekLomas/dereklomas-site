"use client";

import Link from "next/link";
import { useEffect, useState, useMemo, useCallback } from "react";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

interface RiverInfo {
  color: string;
  description: string;
}

interface TimelineData {
  [year: string]: {
    [tradition: string]: number;
  };
}

interface RiversData {
  rivers: Record<string, RiverInfo>;
  timeline: TimelineData;
}

interface AnnotationEvent {
  year: number;
  title: string;
  traditions: string[];
  description?: string;
}

interface AnnotationsData {
  events: AnnotationEvent[];
}

interface SankeyNodeExtra {
  id: string;
  tradition: string;
  decade: number;
}

interface SankeyLinkExtra {
  source: string;
  target: string;
  value: number;
  tradition: string;
}

const RIVER_COLORS: Record<string, string> = {
  hermetica: "#9b59b6",
  alchemy: "#f1c40f",
  mysticism: "#3498db",
  rosicrucianism: "#e74c3c",
  kabbalah: "#2ecc71",
  neoplatonism: "#1abc9c",
  magic: "#8e44ad",
  paracelsianism: "#e67e22",
  theosophy: "#34495e",
};

const RIVER_ORDER = [
  "hermetica", "neoplatonism", "kabbalah", "magic", "alchemy",
  "paracelsianism", "mysticism", "rosicrucianism", "theosophy",
];

export default function RiversPage() {
  const [riversData, setRiversData] = useState<RiversData | null>(null);
  const [annotations, setAnnotations] = useState<AnnotationsData | null>(null);
  const [currentYear, setCurrentYear] = useState(1469);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [hoveredTradition, setHoveredTradition] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 });

  useEffect(() => {
    Promise.all([
      fetch("/data/rivers_of_life.json").then((res) => res.json()),
      fetch("/data/rivers_annotations.json").then((res) => res.json()),
    ]).then(([rivers, annots]) => {
      setRiversData(rivers);
      setAnnotations(annots);
    });
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth - 280, 1100);
      const height = Math.min(window.innerHeight - 280, 650);
      setDimensions({ width: Math.max(600, width), height: Math.max(400, height) });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentYear((y) => {
        if (y >= 1750) { setIsPlaying(false); return 1750; }
        return y + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const currentDecade = Math.floor(currentYear / 10) * 10;

  const sankeyData = useMemo(() => {
    if (!riversData) return null;
    const { timeline } = riversData;
    const years = Object.keys(timeline).map(Number).sort((a, b) => a - b);
    const decades: number[] = [];
    for (let d = 1460; d <= 1750; d += 10) decades.push(d);

    const decadeTotals: Record<number, Record<string, number>> = {};
    for (const decade of decades) {
      decadeTotals[decade] = {};
      for (const tradition of RIVER_ORDER) decadeTotals[decade][tradition] = 0;
    }
    for (const year of years) {
      const decade = Math.floor(year / 10) * 10;
      if (decade < 1460 || decade > 1750) continue;
      const yearData = timeline[year.toString()];
      if (!yearData) continue;
      for (const [tradition, count] of Object.entries(yearData)) {
        if (decadeTotals[decade][tradition] !== undefined) decadeTotals[decade][tradition] += count;
      }
    }

    const nodes: SankeyNodeExtra[] = [];
    const links: SankeyLinkExtra[] = [];
    const nodeMap: Record<string, number> = {};
    let nodeIndex = 0;
    for (const decade of decades) {
      for (const tradition of RIVER_ORDER) {
        const id = `${tradition}-${decade}`;
        nodes.push({ id, tradition, decade });
        nodeMap[id] = nodeIndex++;
      }
    }
    for (let i = 0; i < decades.length - 1; i++) {
      const fromDecade = decades[i], toDecade = decades[i + 1];
      for (const tradition of RIVER_ORDER) {
        links.push({
          source: `${tradition}-${fromDecade}`,
          target: `${tradition}-${toDecade}`,
          value: Math.max(1, decadeTotals[fromDecade][tradition]),
          tradition,
        });
      }
    }
    return { nodes, links, nodeMap, decades, decadeTotals };
  }, [riversData]);

  const sankeyLayout = useMemo(() => {
    if (!sankeyData) return null;
    const { width, height } = dimensions;
    const margin = { top: 20, right: 20, bottom: 40, left: 20 };
    const sankeyGen = sankey<SankeyNodeExtra, SankeyLinkExtra>()
      .nodeWidth(8).nodePadding(4)
      .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]])
      .nodeId((d) => d.id);
    const graph = {
      nodes: sankeyData.nodes.map((n) => ({ ...n })),
      links: sankeyData.links.map((l) => ({ ...l })),
    };
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return sankeyGen(graph as any);
    } catch (e) {
      console.error("Sankey layout error:", e);
      return null;
    }
  }, [sankeyData, dimensions]);

  const visibleEvents = useMemo(() => {
    if (!annotations) return [];
    return annotations.events.filter((e) => e.year <= currentYear).sort((a, b) => b.year - a.year);
  }, [annotations, currentYear]);

  const currentStats = useMemo(() => {
    if (!riversData || !sankeyData) return null;
    const decadeTotals = sankeyData.decadeTotals[currentDecade] || {};
    const total = Object.values(decadeTotals).reduce((s, v) => s + v, 0);
    const topTraditions = Object.entries(decadeTotals).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return { total, topTraditions, decade: currentDecade };
  }, [riversData, sankeyData, currentDecade]);

  const renderLink = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (link: any, index: number) => {
      const path = sankeyLinkHorizontal()(link);
      if (!path) return null;
      const tradition = link.tradition || link.source?.tradition;
      const color = RIVER_COLORS[tradition] || "#999";
      const targetDecade = link.target?.decade || 0;
      const isVisible = targetDecade <= currentDecade;
      const isHovered = hoveredTradition === tradition;
      const opacity = isVisible ? (isHovered || !hoveredTradition ? 0.7 : 0.15) : 0.05;
      return (
        <path
          key={index}
          d={path}
          fill={color}
          fillOpacity={opacity}
          stroke={color}
          strokeOpacity={isVisible ? 0.3 : 0}
          strokeWidth={0.5}
          style={{ transition: "fill-opacity 0.3s, stroke-opacity 0.3s", cursor: "pointer" }}
          onMouseEnter={() => setHoveredTradition(tradition)}
          onMouseLeave={() => setHoveredTradition(null)}
        />
      );
    },
    [currentDecade, hoveredTradition]
  );

  if (!riversData || !annotations || !sankeyLayout) {
    return (
      <div className="min-h-screen py-24 px-6 flex items-center justify-center">
        <p className="text-text-muted">Loading rivers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 pt-24 pb-4 max-w-6xl mx-auto w-full">
        <Link href="/lab" className="text-sm text-text-muted hover:text-rust transition-colors mb-4 inline-block">
          &larr; Back to Lab
        </Link>
        <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-text-primary mb-2">
          Rivers of Esoteric Life
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Animated Sankey diagram mapping 280 years of occult publishing (1469-1750). Nine traditions flow through time as rivers of ink.
        </p>
      </div>

      <div className="flex-1 mx-6 mb-24">
        <div className="max-w-6xl mx-auto flex gap-6">
          {/* Timeline sidebar */}
          <div className="w-56 flex-shrink-0 border-r border-[var(--border-color)] pr-6">
            <div className="text-xs font-semibold tracking-wider text-text-faint uppercase mb-4">Timeline</div>
            <div className="flex flex-col gap-3 max-h-[calc(100vh-400px)] overflow-y-auto">
              {visibleEvents.map((event, i) => (
                <div key={i} style={{ opacity: event.year === currentYear ? 1 : 0.7 }}>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-xs text-rust flex-shrink-0 w-9">{event.year}</span>
                    <div className="flex gap-1 flex-shrink-0">
                      {event.traditions.slice(0, 2).map((t) => (
                        <div key={t} className="w-2 h-2 rounded-sm" style={{ backgroundColor: RIVER_COLORS[t] || "#999" }} />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-text-secondary mt-1 ml-11 leading-snug">{event.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main viz */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-[family-name:var(--font-cormorant)] text-6xl font-semibold text-rust leading-none">{currentYear}</span>
              {currentStats && (
                <span className="text-sm text-text-secondary">
                  <span className="font-medium">{currentStats.total}</span> works this decade
                </span>
              )}
            </div>

            <div className="bg-card border border-[var(--border-color)] rounded-lg overflow-hidden">
              <svg width={dimensions.width} height={dimensions.height}>
                {sankeyData?.decades.filter((d) => d % 50 === 0).map((decade) => {
                  const x = ((decade - 1460) / (1750 - 1460)) * (dimensions.width - 40) + 20;
                  return (
                    <text key={decade} x={x} y={dimensions.height - 10} textAnchor="middle"
                      style={{ fontFamily: "monospace", fontSize: "11px", fill: "#999" }}>
                      {decade}
                    </text>
                  );
                })}
                <line
                  x1={((currentYear - 1460) / (1750 - 1460)) * (dimensions.width - 40) + 20}
                  y1={10}
                  x2={((currentYear - 1460) / (1750 - 1460)) * (dimensions.width - 40) + 20}
                  y2={dimensions.height - 30}
                  stroke="var(--rust, #9e4a3a)" strokeWidth={2} strokeDasharray="4 2" opacity={0.6}
                />
                <g>{sankeyLayout.links.map((link, i) => renderLink(link, i))}</g>
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4 p-3 bg-warm rounded-lg">
              {RIVER_ORDER.map((tradition) => (
                <div
                  key={tradition}
                  className="flex items-center gap-1.5 cursor-pointer transition-opacity"
                  style={{ opacity: hoveredTradition === tradition || !hoveredTradition ? 1 : 0.4 }}
                  onMouseEnter={() => setHoveredTradition(tradition)}
                  onMouseLeave={() => setHoveredTradition(null)}
                >
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: RIVER_COLORS[tradition] }} />
                  <span className="text-xs text-text-secondary capitalize">{tradition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-paper/97 backdrop-blur border-t border-[var(--border-color)] px-6 py-4 z-20">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-2.5 bg-rust text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <div className="flex-1 min-w-[200px]">
            <input
              type="range" min={1469} max={1750} value={currentYear}
              onChange={(e) => setCurrentYear(parseInt(e.target.value))}
              className="w-full accent-rust"
            />
            <div className="flex justify-between text-[11px] font-mono text-text-faint mt-1">
              <span>1469</span><span>1550</span><span>1650</span><span>1750</span>
            </div>
          </div>
          <select
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="px-3 py-2 border border-[var(--border-color)] rounded text-sm bg-card"
          >
            <option value={200}>Slow</option>
            <option value={80}>Normal</option>
            <option value={40}>Fast</option>
            <option value={20}>Very Fast</option>
          </select>
          <button
            onClick={() => { setCurrentYear(1469); setIsPlaying(false); }}
            className="px-4 py-2.5 bg-warm text-text-secondary rounded-md text-sm hover:opacity-80 transition-opacity"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
