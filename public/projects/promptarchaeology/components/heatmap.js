// Calendar Heatmap Component

function createHeatmap(containerId, data) {
    const container = document.getElementById(containerId);
    const tooltip = document.getElementById('heatmap-tooltip');

    const maxPrompts = Math.max(...Object.values(data.byDate).map(d => d.prompts));

    function getLevel(prompts) {
        if (prompts === 0) return 0;
        const ratio = prompts / maxPrompts;
        if (ratio < 0.1) return 1;
        if (ratio < 0.25) return 2;
        if (ratio < 0.5) return 3;
        return 4;
    }

    function createMonth(year, month) {
        const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];

        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';

        const title = document.createElement('div');
        title.className = 'month-title';
        title.textContent = `${monthNames[month]} ${year}`;
        monthDiv.appendChild(title);

        const weekdays = document.createElement('div');
        weekdays.className = 'weekdays';
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(day => {
            const wd = document.createElement('div');
            wd.className = 'weekday';
            wd.textContent = day;
            weekdays.appendChild(wd);
        });
        monthDiv.appendChild(weekdays);

        const days = document.createElement('div');
        days.className = 'days';

        const firstDay = new Date(year, month - 1, 1).getDay();
        const daysInMonth = new Date(year, month, 0).getDate();

        // Empty cells
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            empty.className = 'day empty';
            days.appendChild(empty);
        }

        // Days
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const dayData = data.byDate[dateStr] || { prompts: 0, projects: [] };

            const dayDiv = document.createElement('div');
            dayDiv.className = `day level-${getLevel(dayData.prompts)}`;
            dayDiv.textContent = d;
            dayDiv.dataset.date = dateStr;
            dayDiv.dataset.prompts = dayData.prompts;
            dayDiv.dataset.projects = dayData.projects.join(', ');

            dayDiv.addEventListener('mouseenter', showTooltip);
            dayDiv.addEventListener('mouseleave', hideTooltip);
            dayDiv.addEventListener('click', () => selectDay(dateStr));

            days.appendChild(dayDiv);
        }

        monthDiv.appendChild(days);
        return monthDiv;
    }

    function showTooltip(e) {
        const day = e.target;
        const date = day.dataset.date;
        const prompts = day.dataset.prompts;
        const projects = day.dataset.projects;

        if (prompts === '0') {
            tooltip.innerHTML = `<strong>${date}</strong><br>No activity`;
        } else {
            tooltip.innerHTML = `
                <strong>${date}</strong><br>
                ${prompts} prompts<br>
                <span style="color: var(--accent)">${projects}</span>
            `;
        }

        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
        tooltip.classList.add('visible');
    }

    function hideTooltip() {
        tooltip.classList.remove('visible');
    }

    function selectDay(dateStr) {
        // Update interleave visualization if available
        if (typeof updateInterleaveViz === 'function') {
            updateInterleaveViz(dateStr);
        }
        document.getElementById('selected-date')?.textContent &&
            (document.getElementById('selected-date').textContent = dateStr);
    }

    // Create months Nov 2025 - Feb 2026
    container.appendChild(createMonth(2025, 11));
    container.appendChild(createMonth(2025, 12));
    container.appendChild(createMonth(2026, 1));
    container.appendChild(createMonth(2026, 2));

    // Create legend
    const legendScale = document.querySelector('.legend-scale');
    if (legendScale) {
        [0, 1, 2, 3, 4].forEach(level => {
            const box = document.createElement('div');
            box.style.cssText = `
                width: 16px;
                height: 16px;
                border-radius: 3px;
                display: inline-block;
            `;
            box.className = `day level-${level}`;
            legendScale.appendChild(box);
        });
    }
}
