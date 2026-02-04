// Interleave Visualization Component - Real Data with Block Details

function createInterleaveViz(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Default to highest activity day
    const defaultDate = "2026-01-08";

    // Prefer detailed data if available
    if (DAY_DETAIL_DATA && DAY_DETAIL_DATA[defaultDate]) {
        renderDetailedInterleave(container, defaultDate, data.projectColors);
    } else if (INTERLEAVE_DATA && INTERLEAVE_DATA[defaultDate]) {
        const dayData = INTERLEAVE_DATA[defaultDate];
        renderInterleave(container, dayData.sequence, data.projectColors, dayData);
    }
}

function renderDetailedInterleave(container, dateStr, colors) {
    const dayData = DAY_DETAIL_DATA[dateStr];
    if (!dayData) return;

    container.innerHTML = '';

    // Stats header with real counts
    const totalPrompts = dayData.total_prompts;
    const totalChars = Object.values(dayData.projects).reduce((sum, p) => sum + p.chars, 0);
    const switchCount = dayData.blocks.length;

    const stats = document.createElement('div');
    stats.style.cssText = 'margin-bottom: 16px; font-size: 14px; color: var(--text-muted);';
    stats.innerHTML = `
        <strong>${totalPrompts.toLocaleString()}</strong> prompts ·
        <strong>${switchCount.toLocaleString()}</strong> context switches ·
        <strong>${Math.round(totalChars / 1000)}k</strong> characters
    `;
    container.appendChild(stats);

    // Timeline visualization
    const timeline = document.createElement('div');
    timeline.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
        align-items: flex-end;
        min-height: 80px;
        padding: 10px 0;
    `;

    // Find max prompts for scaling
    const maxPrompts = Math.max(...dayData.blocks.map(b => b.prompts));

    // Render each block
    dayData.blocks.forEach(block => {
        const el = document.createElement('div');
        const height = Math.max(8, Math.round((block.prompts / maxPrompts) * 60));
        const width = Math.max(4, Math.min(block.prompts * 2, 40));

        // Normalize project name for color lookup
        const colorKey = block.project.replace('/v2', '-v2').replace('/', '-');
        const color = colors[colorKey] || colors[block.project] || colors.default;

        el.style.cssText = `
            height: ${height}px;
            width: ${width}px;
            background: ${color};
            border-radius: 2px;
            cursor: pointer;
            opacity: 0.9;
            transition: opacity 0.1s, transform 0.1s;
        `;

        el.addEventListener('mouseenter', () => {
            el.style.opacity = '1';
            el.style.transform = 'scaleY(1.1)';
            showBlockTooltip(el, block);
        });
        el.addEventListener('mouseleave', () => {
            el.style.opacity = '0.9';
            el.style.transform = 'scaleY(1)';
            hideBlockTooltip();
        });

        timeline.appendChild(el);
    });

    container.appendChild(timeline);

    // Hourly breakdown
    if (dayData.hourly) {
        const hourlyDiv = document.createElement('div');
        hourlyDiv.style.cssText = 'margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border);';

        const hourlyTitle = document.createElement('div');
        hourlyTitle.style.cssText = 'font-size: 12px; color: var(--text-muted); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;';
        hourlyTitle.textContent = 'Activity by Hour';
        hourlyDiv.appendChild(hourlyTitle);

        const hourlyChart = document.createElement('div');
        hourlyChart.style.cssText = 'display: flex; align-items: flex-end; gap: 2px; height: 60px;';

        const maxHourly = Math.max(...Object.values(dayData.hourly).map(h => h.prompts));

        for (let h = 0; h < 24; h++) {
            const hourData = dayData.hourly[h];
            const bar = document.createElement('div');
            bar.style.cssText = `
                flex: 1;
                min-width: 8px;
                background: ${hourData ? 'var(--green-3)' : 'var(--bg)'};
                height: ${hourData ? Math.max(4, (hourData.prompts / maxHourly) * 60) : 2}px;
                border-radius: 2px 2px 0 0;
                cursor: ${hourData ? 'pointer' : 'default'};
            `;

            if (hourData) {
                bar.title = `${h}:00 - ${hourData.prompts} prompts, ${Math.round(hourData.chars/1000)}k chars`;
            }

            hourlyChart.appendChild(bar);
        }

        hourlyDiv.appendChild(hourlyChart);

        // Hour labels
        const labels = document.createElement('div');
        labels.style.cssText = 'display: flex; justify-content: space-between; font-size: 10px; color: var(--text-muted); margin-top: 4px;';
        labels.innerHTML = '<span>12am</span><span>6am</span><span>12pm</span><span>6pm</span><span>12am</span>';
        hourlyDiv.appendChild(labels);

        container.appendChild(hourlyDiv);
    }

    // Project breakdown
    if (dayData.projects) {
        const projectDiv = document.createElement('div');
        projectDiv.style.cssText = 'margin-top: 20px; display: flex; gap: 16px; flex-wrap: wrap;';

        Object.entries(dayData.projects)
            .sort((a, b) => b[1].prompts - a[1].prompts)
            .slice(0, 6)
            .forEach(([project, data]) => {
                const colorKey = project.replace('/v2', '-v2').replace('/', '-');
                const color = colors[colorKey] || colors[project] || colors.default;

                const item = document.createElement('div');
                item.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px;';
                item.innerHTML = `
                    <div style="width: 10px; height: 10px; border-radius: 2px; background: ${color}"></div>
                    <span style="color: var(--text)">${project}</span>
                    <span style="color: var(--text-muted)">${data.prompts} prompts</span>
                `;
                projectDiv.appendChild(item);
            });

        container.appendChild(projectDiv);
    }
}

// Tooltip functions
let tooltipEl = null;

function showBlockTooltip(el, block) {
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.cssText = `
            position: fixed;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 8px 12px;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            max-width: 200px;
        `;
        document.body.appendChild(tooltipEl);
    }

    const rect = el.getBoundingClientRect();
    tooltipEl.innerHTML = `
        <div style="font-weight: 600; color: var(--text-bright)">${block.project}</div>
        <div style="color: var(--text-muted)">${block.time}</div>
        <div style="margin-top: 4px; color: var(--text)">
            ${block.prompts} prompts${block.chars > 0 ? ` · ${block.chars.toLocaleString()} chars` : ''}
        </div>
    `;
    tooltipEl.style.left = `${rect.left}px`;
    tooltipEl.style.top = `${rect.top - 70}px`;
    tooltipEl.style.display = 'block';
}

function hideBlockTooltip() {
    if (tooltipEl) {
        tooltipEl.style.display = 'none';
    }
}

function renderInterleave(container, sequence, colors, dayData) {
    container.innerHTML = '';

    // Stats header
    if (dayData) {
        const stats = document.createElement('div');
        stats.style.cssText = 'margin-bottom: 16px; font-size: 14px; color: var(--text-muted);';
        stats.innerHTML = `<strong>${dayData.prompts.toLocaleString()}</strong> prompts · <strong>${dayData.switches.toLocaleString()}</strong> context switches`;
        container.appendChild(stats);
    }

    const track = document.createElement('div');
    track.className = 'interleave-track';

    // Group consecutive same-project blocks
    let groups = [];
    let currentGroup = { project: sequence[0], count: 1 };

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] === currentGroup.project) {
            currentGroup.count++;
        } else {
            groups.push(currentGroup);
            currentGroup = { project: sequence[i], count: 1 };
        }
    }
    groups.push(currentGroup);

    // Render blocks
    groups.forEach(group => {
        const block = document.createElement('div');
        block.className = 'interleave-block';
        block.style.width = `${Math.max(4, group.count * 8)}px`;
        block.style.backgroundColor = colors[group.project] || colors.default;
        block.title = `${group.project} (${group.count})`;
        track.appendChild(block);
    });

    container.appendChild(track);

    // Add legend
    const legend = document.createElement('div');
    legend.style.cssText = 'margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;';

    const uniqueProjects = [...new Set(sequence)];
    uniqueProjects.forEach(project => {
        const item = document.createElement('div');
        item.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px;';
        item.innerHTML = `
            <div style="width: 12px; height: 12px; border-radius: 2px; background: ${colors[project] || colors.default}"></div>
            <span style="color: var(--text-muted)">${project}</span>
        `;
        legend.appendChild(item);
    });

    container.appendChild(legend);
}

function updateInterleaveViz(dateStr) {
    const container = document.getElementById('interleave-viz');
    if (!container) return;

    // Prefer detailed data
    if (DAY_DETAIL_DATA && DAY_DETAIL_DATA[dateStr]) {
        renderDetailedInterleave(container, dateStr, ARCHAEOLOGY_DATA.projectColors);
    } else if (INTERLEAVE_DATA && INTERLEAVE_DATA[dateStr]) {
        const dayData = INTERLEAVE_DATA[dateStr];
        renderInterleave(container, dayData.sequence, ARCHAEOLOGY_DATA.projectColors, dayData);
    } else {
        // Show message for days without detailed data
        const basicData = ARCHAEOLOGY_DATA.byDate[dateStr];
        if (basicData) {
            container.innerHTML = `
                <div style="color: var(--text-muted); font-size: 14px;">
                    <strong>${basicData.prompts}</strong> prompts across
                    <strong>${basicData.projects.length}</strong> projects<br>
                    <span style="color: var(--accent)">${basicData.projects.join(', ')}</span>
                    <p style="margin-top: 8px; font-size: 12px;">
                        (Detailed switch data available for top days)
                    </p>
                </div>
            `;
        }
    }

    // Update date display
    const dateDisplay = document.getElementById('selected-date');
    if (dateDisplay) {
        const d = new Date(dateStr);
        dateDisplay.textContent = d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }
}

// Add day selector dropdown
function createDaySelector() {
    const section = document.getElementById('day-detail');
    if (!section) return;

    const selector = document.createElement('select');
    selector.id = 'day-selector';
    selector.style.cssText = `
        background: var(--bg-secondary);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 8px 12px;
        margin-left: 12px;
        font-family: inherit;
        cursor: pointer;
    `;

    // Prefer DAY_DETAIL_DATA for dropdown
    const dataSource = (typeof DAY_DETAIL_DATA !== 'undefined' && Object.keys(DAY_DETAIL_DATA).length > 0)
        ? DAY_DETAIL_DATA
        : INTERLEAVE_DATA;

    Object.keys(dataSource).sort().reverse().forEach(date => {
        const opt = document.createElement('option');
        opt.value = date;
        const d = new Date(date);
        const prompts = dataSource[date].total_prompts || dataSource[date].prompts;
        opt.textContent = `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} (${prompts.toLocaleString()} prompts)`;
        selector.appendChild(opt);
    });

    selector.addEventListener('change', (e) => {
        updateInterleaveViz(e.target.value);
    });

    const h3 = section.querySelector('h3');
    if (h3) {
        h3.appendChild(selector);
    }
}
