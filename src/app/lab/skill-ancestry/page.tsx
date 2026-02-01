'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

type SkillNode = {
  id: string;
  name: string;
  gradeLevel: string;
  domain: string;
  importance?: number;
  fanout?: number;
  depth?: number;
  prerequisiteCount?: number;
  dependentCount?: number;
};

type Edge = {
  source: string;
  target: string;
  strength: string;
  isNew?: boolean;
};

type GraphData = {
  nodes: SkillNode[];
  edges: Edge[];
};

const GRADE_COLORS: Record<string, string> = {
  K: '#ef4444',
  '1': '#f97316',
  '2': '#eab308',
  '3': '#84cc16',
  '4': '#22c55e',
  '5': '#14b8a6',
  '6': '#06b6d4',
  '7': '#3b82f6',
  '8': '#8b5cf6',
};

function getGradeColor(grade: string): string {
  const normalized = grade.replace(/Grade\s*/i, '').replace(/Kindergarten/i, 'K');
  return GRADE_COLORS[normalized] || '#6b7280';
}

function gradeOrder(grade: string): number {
  const normalized = grade.replace(/Grade\s*/i, '').replace(/Kindergarten/i, 'K');
  if (normalized === 'K') return 0;
  return parseInt(normalized) || 99;
}

type AncestryNode = SkillNode & {
  level: number;
  children: AncestryNode[];
  x?: number;
  y?: number;
};

export default function SkillAncestryPage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'prerequisites' | 'dependents'>('prerequisites');

  useEffect(() => {
    fetch('/data/skill-importance-graph.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading skill data:', err);
        setLoading(false);
      });
  }, []);

  const { nodeMap, prerequisiteMap, dependentMap } = useMemo(() => {
    if (!data) return { nodeMap: new Map(), prerequisiteMap: new Map(), dependentMap: new Map() };

    const nodeMap = new Map<string, SkillNode>();
    data.nodes.forEach((n) => nodeMap.set(n.id, n));

    const prerequisiteMap = new Map<string, string[]>();
    const dependentMap = new Map<string, string[]>();

    data.edges.forEach((e) => {
      const prereqId = e.source;
      const depId = e.target;

      if (!prerequisiteMap.has(depId)) prerequisiteMap.set(depId, []);
      prerequisiteMap.get(depId)!.push(prereqId);

      if (!dependentMap.has(prereqId)) dependentMap.set(prereqId, []);
      dependentMap.get(prereqId)!.push(depId);
    });

    return { nodeMap, prerequisiteMap, dependentMap };
  }, [data]);

  const filteredSkills = useMemo(() => {
    if (!data) return [];
    const query = searchQuery.toLowerCase().trim();
    if (!query) return data.nodes.slice(0, 50);
    return data.nodes
      .filter(
        (n) =>
          n.name.toLowerCase().includes(query) ||
          n.domain.toLowerCase().includes(query) ||
          n.gradeLevel.includes(query)
      )
      .slice(0, 50);
  }, [data, searchQuery]);

  const ancestryTree = useMemo(() => {
    if (!selectedSkillId || !nodeMap.has(selectedSkillId)) return null;

    const visited = new Set<string>();

    function buildTree(skillId: string, level: number, maxDepth: number): AncestryNode | null {
      if (visited.has(skillId) || level > maxDepth) return null;
      visited.add(skillId);

      const skill = nodeMap.get(skillId);
      if (!skill) return null;

      const relatedIds =
        viewMode === 'prerequisites'
          ? prerequisiteMap.get(skillId) || []
          : dependentMap.get(skillId) || [];

      const children: AncestryNode[] = [];
      for (const relId of relatedIds) {
        const child = buildTree(relId, level + 1, maxDepth);
        if (child) children.push(child);
      }

      children.sort((a, b) => gradeOrder(a.gradeLevel) - gradeOrder(b.gradeLevel));

      return { ...skill, level, children };
    }

    return buildTree(selectedSkillId, 0, 6);
  }, [selectedSkillId, nodeMap, prerequisiteMap, dependentMap, viewMode]);

  useEffect(() => {
    if (!ancestryTree || !svgRef.current) return;

    const width = 1200;
    const nodeHeight = 70;
    const nodeWidth = 280;
    const levelGap = 100;

    const root = d3.hierarchy(ancestryTree, (d) => d.children);

    let nodeCount = 0;
    root.each(() => nodeCount++);

    const treeLayout = d3
      .tree<AncestryNode>()
      .nodeSize([nodeHeight, levelGap])
      .separation((a, b) => (a.parent === b.parent ? 1.2 : 1.8));

    treeLayout(root);

    let minX = Infinity, maxX = -Infinity;
    root.each((d) => {
      if (d.x !== undefined) {
        minX = Math.min(minX, d.x);
        maxX = Math.max(maxX, d.x);
      }
    });

    const treeHeight = maxX - minX + nodeHeight * 2;
    const svgHeight = Math.max(600, treeHeight);

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', svgHeight);

    const g = svg.append('g');

    svg.call(
      d3
        .zoom<SVGSVGElement, unknown>()
        .extent([[0, 0], [width, svgHeight]])
        .scaleExtent([0.3, 2])
        .on('zoom', (event) => {
          g.attr('transform', event.transform);
        }) as any
    );

    const offsetX = 150;
    const offsetY = svgHeight / 2 - (minX + maxX) / 2;

    // Links
    g.append('g')
      .attr('fill', 'none')
      .selectAll('path')
      .data(root.links())
      .join('path')
      .attr('d', (d) => {
        const sx = d.source.y! + offsetX;
        const sy = d.source.x! + offsetY;
        const tx = d.target.y! + offsetX;
        const ty = d.target.x! + offsetY;
        const midX = (sx + tx) / 2;
        return `M${sx},${sy} C${midX},${sy} ${midX},${ty} ${tx},${ty}`;
      })
      .attr('stroke', '#8b7355')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.5);

    // Nodes
    const nodes = g
      .append('g')
      .selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('transform', (d) => `translate(${d.y! + offsetX},${d.x! + offsetY})`);

    nodes
      .append('rect')
      .attr('x', -nodeWidth / 2)
      .attr('y', -18)
      .attr('width', nodeWidth)
      .attr('height', 36)
      .attr('rx', 6)
      .attr('fill', (d) => (d.depth === 0 ? '#3d2b1f' : '#2a2118'))
      .attr('stroke', (d) => getGradeColor(d.data.gradeLevel))
      .attr('stroke-width', (d) => (d.depth === 0 ? 3 : 2));

    // Grade badge
    nodes
      .append('rect')
      .attr('x', -nodeWidth / 2 + 4)
      .attr('y', -14)
      .attr('width', 28)
      .attr('height', 28)
      .attr('rx', 4)
      .attr('fill', (d) => getGradeColor(d.data.gradeLevel));

    nodes
      .append('text')
      .attr('x', -nodeWidth / 2 + 18)
      .attr('y', 5)
      .attr('text-anchor', 'middle')
      .attr('fill', '#111')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .text((d) => d.data.gradeLevel.replace(/Grade\s*/i, '').replace(/Kindergarten/i, 'K'));

    // Skill name
    nodes
      .append('text')
      .attr('x', -nodeWidth / 2 + 40)
      .attr('y', 1)
      .attr('fill', '#f5f0eb')
      .attr('font-size', '11px')
      .attr('dominant-baseline', 'middle')
      .text((d) => {
        const name = d.data.name;
        return name.length > 30 ? name.substring(0, 30) + '...' : name;
      });

    // Domain label
    nodes
      .append('text')
      .attr('x', -nodeWidth / 2 + 40)
      .attr('y', 13)
      .attr('fill', '#8b7355')
      .attr('font-size', '9px')
      .text((d) => {
        const domain = d.data.domain;
        return domain.length > 35 ? domain.substring(0, 35) + '...' : domain;
      });

    const initialTransform = d3.zoomIdentity.translate(50, 0);
    svg.call((d3.zoom() as any).transform, initialTransform);
    g.attr('transform', initialTransform.toString());
  }, [ancestryTree]);

  const selectedSkill = selectedSkillId ? nodeMap.get(selectedSkillId) : null;

  if (loading) {
    return (
      <div className="min-h-screen py-24 px-6 flex items-center justify-center">
        <p className="text-text-muted">Loading skill data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-6 pt-24 pb-4 max-w-6xl mx-auto w-full">
        <Link href="/lab" className="text-sm text-text-muted hover:text-rust transition-colors mb-4 inline-block">
          &larr; Back to Lab
        </Link>
        <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-text-primary mb-2">
          Math Skill Ancestry Tree
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Explore how K-8 math skills connect. Select a skill to see its prerequisite chain or what it unlocks.
          Built for <a href="https://www.playpowerlabs.com" target="_blank" rel="noopener noreferrer" className="text-rust hover:underline">PlayPowerLearn</a>.
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex mx-6 mb-6 rounded-lg overflow-hidden border border-[var(--border-color)]" style={{ minHeight: '600px' }}>
        {/* Sidebar */}
        <div className="w-72 bg-[#1a1510] text-[#f5f0eb] flex flex-col border-r border-[#3d3228]">
          <div className="p-4 border-b border-[#3d3228]">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setViewMode('prerequisites')}
                className={`flex-1 py-1.5 px-3 rounded text-sm font-medium transition-colors ${
                  viewMode === 'prerequisites'
                    ? 'bg-[#3b82f6] text-white'
                    : 'bg-[#2a2118] text-[#8b7355] hover:bg-[#3d3228]'
                }`}
              >
                Prerequisites
              </button>
              <button
                onClick={() => setViewMode('dependents')}
                className={`flex-1 py-1.5 px-3 rounded text-sm font-medium transition-colors ${
                  viewMode === 'dependents'
                    ? 'bg-[#22c55e] text-white'
                    : 'bg-[#2a2118] text-[#8b7355] hover:bg-[#3d3228]'
                }`}
              >
                Dependents
              </button>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full px-3 py-2 bg-[#2a2118] rounded text-sm text-[#f5f0eb] placeholder-[#6b5a47] focus:outline-none focus:ring-2 focus:ring-[#8b7355] border border-[#3d3228]"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredSkills.map((skill) => (
              <button
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`w-full text-left px-4 py-3 border-b border-[#3d3228] hover:bg-[#2a2118] transition-colors ${
                  selectedSkillId === skill.id ? 'bg-[#2a2118]' : ''
                }`}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="inline-block w-6 h-6 rounded text-center text-xs font-bold leading-6 flex-shrink-0"
                    style={{ backgroundColor: getGradeColor(skill.gradeLevel), color: '#111' }}
                  >
                    {skill.gradeLevel.replace(/Grade\s*/i, '').replace(/Kindergarten/i, 'K')}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate text-[#f5f0eb]">{skill.name}</div>
                    <div className="text-xs truncate text-[#8b7355]">{skill.domain}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tree area */}
        <div className="flex-1 relative bg-[#1a1510]">
          {selectedSkill ? (
            <>
              <div className="absolute top-4 left-4 right-4 z-10 bg-[#2a2118]/95 backdrop-blur rounded-lg p-3 shadow-lg border border-[#3d3228]">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block w-8 h-8 rounded text-center text-sm font-bold leading-8"
                    style={{ backgroundColor: getGradeColor(selectedSkill.gradeLevel), color: '#111' }}
                  >
                    {selectedSkill.gradeLevel.replace(/Grade\s*/i, '').replace(/Kindergarten/i, 'K')}
                  </span>
                  <div>
                    <div className="font-bold text-[#f5f0eb]">{selectedSkill.name}</div>
                    <div className="text-sm text-[#8b7355]">{selectedSkill.domain}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-[#6b5a47]">
                  {viewMode === 'prerequisites'
                    ? 'Showing skills that must be learned before this one'
                    : 'Showing skills that depend on this one'}
                </div>
              </div>

              <svg ref={svgRef} className="w-full h-full" />

              <div className="absolute bottom-4 left-4 z-10 bg-[#2a2118]/95 backdrop-blur rounded-lg p-2 shadow-lg border border-[#3d3228] text-xs">
                <div className="text-[#6b5a47] mb-1">Drag to pan, scroll to zoom</div>
                <div className="flex gap-2">
                  {['K', '1', '2', '3', '4', '5', '6', '7', '8'].map((g) => (
                    <div key={g} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: getGradeColor(g) }} />
                      <span className="text-[#6b5a47]">{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-[#6b5a47]">
              Select a skill to view its {viewMode === 'prerequisites' ? 'prerequisite' : 'dependent'} tree
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
