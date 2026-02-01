'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

type SkillNode = {
  id: string;
  name: string;
  gradeLevel: string;
  domain: string;
  fanout: number;
  depth: number;
  centrality: number;
  composite: number;
  dependentCount: number;
  prerequisiteCount: number;
  x?: number;
  y?: number;
};

type Edge = {
  source: string | SkillNode;
  target: string | SkillNode;
  strength: string;
  isNew?: boolean;
};

type GraphData = {
  nodes: SkillNode[];
  edges: Edge[];
  metadata?: {
    generatedAt: string;
    nodeCount: number;
    edgeCount: number;
    newEdges: number;
    oldEdges: number;
  };
};

const GRADE_COLORS: Record<string, string> = {
  'K': '#ef4444',
  'Kindergarten': '#ef4444',
  '1': '#f97316',
  '2': '#eab308',
  '3': '#84cc16',
  '4': '#22c55e',
  '5': '#14b8a6',
  '6': '#06b6d4',
  '7': '#3b82f6',
  '8': '#8b5cf6',
};

const DOMAIN_COLUMNS: Record<string, number> = {
  'Counting & Cardinality': 0,
  'Operations & Algebraic Thinking': 1,
  'Number & Operations in Base Ten': 2,
  'Number and Operations in Base Ten': 2,
  'Measurement & Data': 3,
  'Geometry': 4,
  'Number & Operations—Fractions': 5,
  'Number & Operations-Fractions': 5,
  'Numbers & Operations - Fractions': 5,
  'Number and Operations-Fractions': 5,
  'Ratios & Proportional Relationships': 1,
  'Ratios and Proportional Relationships': 1,
  'The Number System': 2,
  'Expressions & Equations': 3,
  'Expressions and Equations': 3,
  'Functions': 4,
  'Statistics & Probability': 5,
  'Statistics and Probability': 5,
};

function getGradeColor(grade: string): string {
  return GRADE_COLORS[grade] || '#6b7280';
}

function gradeToRow(grade: string): number {
  if (grade === 'K' || grade === 'Kindergarten') return 0;
  const match = grade.match(/\d+/);
  if (match) return parseInt(match[0]);
  return 9;
}

function domainToColumn(domain: string): number {
  return DOMAIN_COLUMNS[domain] ?? 3;
}

export default function SkillGraphPage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [selectedGrades, setSelectedGrades] = useState<Set<string>>(
    new Set(['K', '1', '2', '3', '4', '5', '6', '7', '8'])
  );
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);
  const [showOnlyConnected, setShowOnlyConnected] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/skill-importance-graph.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading graph data:', err);
        setLoading(false);
      });
  }, []);

  const { displayNodes, displayEdges } = useMemo(() => {
    if (!data) return { displayNodes: [], displayEdges: [] };

    let nodes = data.nodes.filter((n) => selectedGrades.has(n.gradeLevel));
    const nodeIds = new Set(nodes.map((n) => n.id));

    const edges = data.edges.filter(
      (e) =>
        nodeIds.has(typeof e.source === 'string' ? e.source : e.source.id) &&
        nodeIds.has(typeof e.target === 'string' ? e.target : e.target.id)
    );

    if (showOnlyConnected) {
      const connectedIds = new Set<string>();
      edges.forEach((e) => {
        connectedIds.add(typeof e.source === 'string' ? e.source : e.source.id);
        connectedIds.add(typeof e.target === 'string' ? e.target : e.target.id);
      });
      nodes = nodes.filter((n) => connectedIds.has(n.id));
    }

    return { displayNodes: nodes, displayEdges: edges };
  }, [data, selectedGrades, showOnlyConnected]);

  useEffect(() => {
    if (!displayNodes.length || !svgRef.current) return;

    const width = 1400;
    const rowHeight = 100;
    const height = rowHeight * 10 + 100;
    const margin = { top: 60, right: 40, bottom: 40, left: 120 };
    const columnWidth = (width - margin.left - margin.right) / 6;

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g');

    svg.call(
      d3
        .zoom<SVGSVGElement, unknown>()
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.3, 3])
        .on('zoom', (event) => {
          g.attr('transform', event.transform);
        }) as any
    );

    const gradeGroups = new Map<string, Map<string, SkillNode[]>>();
    displayNodes.forEach((node) => {
      const grade = node.gradeLevel;
      if (!gradeGroups.has(grade)) gradeGroups.set(grade, new Map());
      const domainMap = gradeGroups.get(grade)!;
      const domain = node.domain;
      if (!domainMap.has(domain)) domainMap.set(domain, []);
      domainMap.get(domain)!.push(node);
    });

    const nodePositions = new Map<string, { x: number; y: number }>();
    gradeGroups.forEach((domainMap, grade) => {
      const row = gradeToRow(grade);
      const y = margin.top + row * rowHeight + rowHeight / 2;
      domainMap.forEach((nodes, domain) => {
        const col = domainToColumn(domain);
        const baseX = margin.left + col * columnWidth + columnWidth / 2;
        const spread = Math.min(columnWidth * 0.8, nodes.length * 12);
        nodes.forEach((node, i) => {
          const offset = nodes.length > 1 ? (i / (nodes.length - 1) - 0.5) * spread : 0;
          const x = baseX + offset;
          nodePositions.set(node.id, { x, y });
          node.x = x;
          node.y = y;
        });
      });
    });

    const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];
    g.append('g')
      .selectAll('rect')
      .data(grades)
      .join('rect')
      .attr('x', margin.left - 10)
      .attr('y', (d) => margin.top + gradeToRow(d) * rowHeight)
      .attr('width', width - margin.left - margin.right + 20)
      .attr('height', rowHeight)
      .attr('fill', (_d, i) => (i % 2 === 0 ? '#1f2937' : '#111827'))
      .attr('opacity', 0.5);

    g.append('g')
      .selectAll('text')
      .data(grades)
      .join('text')
      .attr('x', margin.left - 20)
      .attr('y', (d) => margin.top + gradeToRow(d) * rowHeight + rowHeight / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('fill', (d) => getGradeColor(d))
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .text((d) => `Grade ${d}`);

    svg.append('defs')
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '-0 -5 10 10')
      .attr('refX', 12)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .append('path')
      .attr('d', 'M 0,-5 L 10,0 L 0,5')
      .attr('fill', '#4b5563');

    const link = g.append('g')
      .selectAll('path')
      .data(displayEdges)
      .join('path')
      .attr('d', (d) => {
        const sourceId = typeof d.source === 'string' ? d.source : d.source.id;
        const targetId = typeof d.target === 'string' ? d.target : d.target.id;
        const source = nodePositions.get(sourceId);
        const target = nodePositions.get(targetId);
        if (!source || !target) return '';
        const midY = (source.y + target.y) / 2;
        const dx = target.x - source.x;
        const controlOffset = Math.min(Math.abs(dx) * 0.3, 30);
        return `M ${source.x} ${source.y} Q ${source.x + controlOffset} ${midY} ${target.x} ${target.y}`;
      })
      .attr('fill', 'none')
      .attr('stroke', (d) => (d.isNew ? '#f59e0b' : '#4b5563'))
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.4)
      .attr('marker-end', 'url(#arrowhead)');

    const node = g.append('g')
      .selectAll('g')
      .data(displayNodes)
      .join('g')
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
      .attr('cursor', 'pointer');

    node.append('circle')
      .attr('class', 'selection-ring')
      .attr('r', (d) => Math.max(4, Math.sqrt((d.composite || 0.1) * 50) + 3) + 4)
      .attr('fill', 'none')
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 3)
      .attr('opacity', (d) => (selectedNode?.id === d.id ? 1 : 0));

    node.append('circle')
      .attr('r', (d) => Math.max(4, Math.sqrt((d.composite || 0.1) * 50) + 3))
      .attr('fill', (d) => getGradeColor(d.gradeLevel))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.9);

    const highlightEdgesForNode = (nodeId: string | null) => {
      if (!nodeId) {
        link.attr('stroke', (d) => (d.isNew ? '#f59e0b' : '#4b5563'))
          .attr('stroke-width', 1).attr('stroke-opacity', 0.4);
        return;
      }
      link.attr('stroke', (l) => {
        const sid = typeof l.source === 'string' ? l.source : l.source.id;
        const tid = typeof l.target === 'string' ? l.target : l.target.id;
        if (sid === nodeId) return '#22c55e';
        if (tid === nodeId) return '#3b82f6';
        return l.isNew ? '#f59e0b' : '#4b5563';
      }).attr('stroke-width', (l) => {
        const sid = typeof l.source === 'string' ? l.source : l.source.id;
        const tid = typeof l.target === 'string' ? l.target : l.target.id;
        return sid === nodeId || tid === nodeId ? 2.5 : 1;
      }).attr('stroke-opacity', (l) => {
        const sid = typeof l.source === 'string' ? l.source : l.source.id;
        const tid = typeof l.target === 'string' ? l.target : l.target.id;
        return sid === nodeId || tid === nodeId ? 1 : 0.15;
      });
    };

    if (selectedNode) highlightEdgesForNode(selectedNode.id);

    node.on('mouseenter', function (_event, d) {
      setHoveredNode(d);
      if (!selectedNode) highlightEdgesForNode(d.id);
      d3.select(this).select('circle').attr('stroke-width', 3);
    }).on('mouseleave', function () {
      setHoveredNode(null);
      highlightEdgesForNode(selectedNode?.id || null);
      d3.select(this).select('circle').attr('stroke-width', 1.5);
    }).on('click', (event, d) => {
      event.stopPropagation();
      const newSelected = selectedNode?.id === d.id ? null : d;
      setSelectedNode(newSelected);
      highlightEdgesForNode(newSelected?.id || null);
      node.selectAll('.selection-ring')
        .attr('opacity', (nd) => (newSelected?.id === (nd as SkillNode).id ? 1 : 0));
    });

    svg.on('click', () => {
      setSelectedNode(null);
      highlightEdgesForNode(null);
      node.selectAll('.selection-ring').attr('opacity', 0);
    });
  }, [displayNodes, displayEdges, selectedNode]);

  const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];

  const toggleGrade = (grade: string) => {
    setSelectedGrades((prev) => {
      const next = new Set(prev);
      if (next.has(grade)) next.delete(grade);
      else next.add(grade);
      return next;
    });
  };

  const displayNode = hoveredNode || selectedNode;

  if (loading) {
    return (
      <div className="min-h-screen py-24 px-6 flex items-center justify-center">
        <p className="text-text-muted">Loading skill graph...</p>
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
          Math Skill Progression Graph
        </h1>
        <p className="text-text-secondary max-w-2xl">
          K-8 math skills organized by grade (rows) and domain (columns). Node size reflects importance.
          Built for <a href="https://www.playpowerlabs.com" target="_blank" rel="noopener noreferrer" className="text-rust hover:underline">PlayPowerLearn</a>.
        </p>
      </div>

      <div className="flex-1 relative mx-6 mb-6 rounded-lg overflow-hidden border border-[var(--border-color)] bg-gray-900" style={{ minHeight: '600px' }}>
        {/* Controls */}
        <div className="absolute top-3 left-3 z-10 bg-gray-800/95 backdrop-blur rounded-lg p-3 shadow-lg max-w-[200px]">
          <div className="text-xs text-gray-400 mb-1">Filter by Grade</div>
          <div className="flex flex-wrap gap-1 mb-2">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => toggleGrade(grade)}
                className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                  selectedGrades.has(grade) ? 'text-gray-900' : 'bg-gray-700 text-gray-500'
                }`}
                style={{ backgroundColor: selectedGrades.has(grade) ? getGradeColor(grade) : undefined }}
              >
                {grade}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-300">
            <input
              type="checkbox"
              checked={showOnlyConnected}
              onChange={(e) => setShowOnlyConnected(e.target.checked)}
              className="rounded w-3 h-3"
            />
            Connected only
          </label>
          <div className="text-[10px] text-gray-500 mt-2">Scroll to zoom, drag to pan</div>
        </div>

        {/* Node info */}
        {displayNode && (
          <div className="absolute top-3 right-3 z-10 bg-gray-800/95 backdrop-blur rounded-lg p-3 shadow-lg max-w-[260px] text-white">
            <div className="font-bold text-sm leading-tight mb-1">{displayNode.name}</div>
            <div className="text-xs text-gray-400 mb-2">
              Grade {displayNode.gradeLevel} &middot; {displayNode.domain}
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
              <div><span className="text-gray-500">Importance:</span> <span className="font-mono">{(displayNode.composite || 0).toFixed(2)}</span></div>
              <div><span className="text-gray-500">Fanout:</span> <span className="font-mono">{(displayNode.fanout || 0).toFixed(2)}</span></div>
              <div><span className="text-gray-500">Prerequisites:</span> <span className="font-mono">{displayNode.prerequisiteCount || 0}</span></div>
              <div><span className="text-gray-500">Dependents:</span> <span className="font-mono">{displayNode.dependentCount || 0}</span></div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 z-10 bg-gray-800/95 backdrop-blur rounded-lg p-2 shadow-lg text-white">
          <div className="flex flex-wrap gap-2 mb-1">
            {grades.map((grade) => (
              <div key={grade} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getGradeColor(grade) }} />
                <span className="text-[10px]">{grade}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-gray-500 space-y-0.5">
            <div className="flex items-center gap-2"><div className="w-4 h-0.5 bg-blue-500" /><span>Prerequisites</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-0.5 bg-green-500" /><span>Dependents</span></div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-3 right-3 z-10 bg-gray-800/95 backdrop-blur rounded-lg p-2 shadow-lg text-[10px] text-gray-400">
          {displayNodes.length} skills &middot; {displayEdges.length} prereqs
        </div>

        <svg ref={svgRef} className="w-full h-full" />
      </div>
    </div>
  );
}
