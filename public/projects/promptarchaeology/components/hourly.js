// Hourly Distribution Chart

function createHourlyChart(containerId, hourlyData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const maxValue = Math.max(...Object.values(hourlyData));

    // Clear container
    container.innerHTML = '';

    // Create rows for each hour
    for (let hour = 0; hour < 24; hour++) {
        const value = hourlyData[hour] || 0;
        const percentage = (value / maxValue) * 100;

        const row = document.createElement('div');
        row.className = 'hour-row';

        const label = document.createElement('div');
        label.className = 'hour-label';
        label.textContent = `${String(hour).padStart(2, '0')}:00`;

        const barContainer = document.createElement('div');
        barContainer.style.cssText = 'flex: 1; background: var(--bg); border-radius: 2px; height: 16px; position: relative;';

        const bar = document.createElement('div');
        bar.className = 'hour-bar';
        bar.style.width = `${percentage}%`;

        // Color intensity based on value
        if (percentage > 80) {
            bar.style.background = 'var(--green-4)';
        } else if (percentage > 50) {
            bar.style.background = 'var(--green-3)';
        } else if (percentage > 25) {
            bar.style.background = 'var(--green-2)';
        } else {
            bar.style.background = 'var(--green-1)';
        }

        barContainer.appendChild(bar);

        const valueLabel = document.createElement('span');
        valueLabel.className = 'hour-value';
        valueLabel.textContent = value.toLocaleString();

        row.appendChild(label);
        row.appendChild(barContainer);
        row.appendChild(valueLabel);
        container.appendChild(row);
    }

    // Add annotation for peak hours
    const annotation = document.createElement('div');
    annotation.style.cssText = 'margin-top: 16px; font-size: 12px; color: var(--text-muted);';
    annotation.innerHTML = `
        <strong>Peak hours:</strong> 14:00-16:00 (afternoon) and 22:00-00:00 (late night)<br>
        <strong>Low point:</strong> 03:00-06:00 (sleep... mostly)
    `;
    container.appendChild(annotation);
}
