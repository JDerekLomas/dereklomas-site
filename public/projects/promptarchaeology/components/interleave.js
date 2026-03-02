// Interleave Visualization Component - Real Data with Block Details

function createInterleaveViz(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Default to highest activity day
    const defaultDate = "2026-01-08";

    // Render the stream timeline (multiple days overview)
    renderStreamTimeline(data.projectColors, defaultDate);

    // Render the pulse visualization
    if (DAY_DETAIL_DATA && DAY_DETAIL_DATA[defaultDate]) {
        renderPulseViz(defaultDate, data.projectColors);
    }

    // Render the microscope view
    if (DAY_DETAIL_DATA && DAY_DETAIL_DATA[defaultDate]) {
        renderMicroTimeline(defaultDate, data.projectColors);
    }

    // Prefer detailed data if available
    if (DAY_DETAIL_DATA && DAY_DETAIL_DATA[defaultDate]) {
        renderDetailedInterleave(container, defaultDate, data.projectColors);
    } else if (INTERLEAVE_DATA && INTERLEAVE_DATA[defaultDate]) {
        const dayData = INTERLEAVE_DATA[defaultDate];
        renderInterleave(container, dayData.sequence, data.projectColors, dayData);
    }
}

// Stream Timeline - shows multiple days as colored bands
function renderStreamTimeline(colors, selectedDate) {
    const container = document.getElementById('stream-viz');
    if (!container) return;

    container.innerHTML = '';

    // Get days with detailed data, sorted by date
    const days = Object.keys(DAY_DETAIL_DATA || INTERLEAVE_DATA || {}).sort().reverse();

    days.forEach(dateStr => {
        const dayData = DAY_DETAIL_DATA ? DAY_DETAIL_DATA[dateStr] : INTERLEAVE_DATA[dateStr];
        if (!dayData) return;

        const row = document.createElement('div');
        row.className = 'stream-day' + (dateStr === selectedDate ? ' selected' : '');
        row.dataset.date = dateStr;

        // Date label
        const dateLabel = document.createElement('div');
        dateLabel.className = 'stream-date';
        const d = new Date(dateStr);
        dateLabel.textContent = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        row.appendChild(dateLabel);

        // Stream bar showing project proportions
        const bar = document.createElement('div');
        bar.className = 'stream-bar';

        const projects = dayData.projects || {};
        const totalPrompts = dayData.total_prompts || dayData.prompts || Object.values(projects).reduce((sum, p) => sum + (p.prompts || p), 0);

        // Sort projects by prompt count
        const sortedProjects = Object.entries(projects)
            .sort((a, b) => (b[1].prompts || b[1]) - (a[1].prompts || a[1]));

        sortedProjects.forEach(([project, data]) => {
            const prompts = data.prompts || data;
            const pct = (prompts / totalPrompts) * 100;
            if (pct < 1) return; // Skip tiny segments

            const segment = document.createElement('div');
            segment.className = 'stream-segment';
            const colorKey = project.replace('/v2', '-v2').replace('/', '-');
            segment.style.backgroundColor = colors[colorKey] || colors[project] || colors.default;
            segment.style.width = `${pct}%`;
            segment.title = `${project}: ${prompts.toLocaleString()} prompts`;
            bar.appendChild(segment);
        });

        row.appendChild(bar);

        // Prompt count
        const count = document.createElement('div');
        count.className = 'stream-count';
        count.textContent = totalPrompts.toLocaleString();
        row.appendChild(count);

        // Click handler
        row.addEventListener('click', () => {
            document.querySelectorAll('.stream-day').forEach(el => el.classList.remove('selected'));
            row.classList.add('selected');
            updateInterleaveViz(dateStr);
            renderMicroTimeline(dateStr, colors);
        });

        container.appendChild(row);
    });
}

// Pulse visualization - shows switching rhythm like a heartbeat
function renderPulseViz(dateStr, colors) {
    const container = document.getElementById('pulse-viz');
    if (!container) return;

    const dayData = DAY_DETAIL_DATA ? DAY_DETAIL_DATA[dateStr] : null;
    if (!dayData || !dayData.blocks) {
        container.innerHTML = '<div style="color: var(--text-muted); font-size: 12px;">Detailed timing data not available</div>';
        return;
    }

    container.innerHTML = '';

    // Max prompts for scaling
    const maxPrompts = Math.max(...dayData.blocks.map(b => b.prompts));

    // Render each block as a spike
    dayData.blocks.slice(0, 200).forEach((block, i) => {
        const bar = document.createElement('div');
        bar.className = 'pulse-bar';
        const height = Math.max(4, (block.prompts / maxPrompts) * 70);

        const colorKey = block.project.replace('/v2', '-v2').replace('/', '-');
        bar.style.backgroundColor = colors[colorKey] || colors[block.project] || colors.default;
        bar.style.height = `${height}px`;
        bar.style.opacity = 0.7 + (block.prompts / maxPrompts) * 0.3;
        bar.title = `${block.project}\n${block.time}\n${block.prompts} prompts`;

        container.appendChild(bar);
    });

    // Add time axis
    const existingAxis = container.parentNode.querySelector('.pulse-time-axis');
    if (existingAxis) existingAxis.remove();

    const axis = document.createElement('div');
    axis.className = 'pulse-time-axis';

    if (dayData.blocks.length > 0) {
        const firstTime = dayData.blocks[0].time;
        const lastTime = dayData.blocks[Math.min(dayData.blocks.length - 1, 199)].time;
        const switchCount = Math.min(dayData.blocks.length, 200);
        axis.innerHTML = `<span>${firstTime}</span><span>${switchCount} switches shown</span><span>${lastTime}</span>`;
    }
    container.after(axis);
}

// Microscope view - zoomed in to show rapid switching in one hour
function renderMicroTimeline(dateStr, colors) {
    const container = document.getElementById('micro-timeline');
    if (!container) return;

    const dayData = DAY_DETAIL_DATA ? DAY_DETAIL_DATA[dateStr] : null;
    if (!dayData || !dayData.blocks) {
        container.innerHTML = '<div style="color: var(--text-muted); font-size: 12px;">Detailed timing data not available</div>';
        return;
    }

    container.innerHTML = '';

    // Find the busiest hour
    let busiestHour = 9;
    let maxPrompts = 0;
    if (dayData.hourly) {
        Object.entries(dayData.hourly).forEach(([h, data]) => {
            if (data.prompts > maxPrompts) {
                maxPrompts = data.prompts;
                busiestHour = parseInt(h);
            }
        });
    }

    // Filter blocks in that hour
    const hourBlocks = dayData.blocks.filter(b => {
        const hour = parseInt(b.time.split(':')[0]);
        return hour === busiestHour;
    });

    if (hourBlocks.length === 0) {
        // Just show first few blocks
        hourBlocks.push(...dayData.blocks.slice(0, 15));
    }

    // Calculate total prompts in this selection
    const totalPrompts = hourBlocks.reduce((sum, b) => sum + b.prompts, 0);

    // Render each block proportionally
    hourBlocks.forEach(block => {
        const el = document.createElement('div');
        el.className = 'micro-block';
        const pct = (block.prompts / totalPrompts) * 100;

        const colorKey = block.project.replace('/v2', '-v2').replace('/', '-');
        el.style.backgroundColor = colors[colorKey] || colors[block.project] || colors.default;
        el.style.width = `${Math.max(pct, 2)}%`;

        // Show project name if block is wide enough
        if (pct > 8) {
            const label = document.createElement('span');
            label.textContent = block.project.replace('/v2', '').substring(0, 8);
            el.appendChild(label);
        }

        el.title = `${block.project}\n${block.time}\n${block.prompts} prompts`;
        container.appendChild(el);
    });

    // Add time markers
    const existingMarkers = container.parentNode.querySelector('.micro-time-markers');
    if (existingMarkers) existingMarkers.remove();

    const markers = document.createElement('div');
    markers.className = 'micro-time-markers';
    if (hourBlocks.length > 0) {
        const firstTime = hourBlocks[0].time;
        const lastTime = hourBlocks[hourBlocks.length - 1].time;
        markers.innerHTML = `<span>${firstTime}</span><span style="color: var(--accent-rust);">${hourBlocks.length} switches in ~${60 - (parseInt(firstTime.split(':')[1]) || 0)} min</span><span>${lastTime}</span>`;
    }
    container.after(markers);
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

    // Update pulse visualization
    renderPulseViz(dateStr, ARCHAEOLOGY_DATA.projectColors);

    // Update micro timeline
    renderMicroTimeline(dateStr, ARCHAEOLOGY_DATA.projectColors);

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
                    <span style="color: var(--accent-rust)">${basicData.projects.join(', ')}</span>
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

    // Update stream timeline selection
    document.querySelectorAll('.stream-day').forEach(el => {
        el.classList.toggle('selected', el.dataset.date === dateStr);
    });
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
