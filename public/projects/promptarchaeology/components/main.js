// Main initialization

document.addEventListener('DOMContentLoaded', () => {
    // Initialize heatmap
    createHeatmap('calendar-heatmap', ARCHAEOLOGY_DATA);

    // Initialize hourly chart
    createHourlyChart('hourly-chart', ARCHAEOLOGY_DATA.hourly);

    // Initialize interleave visualization with peak day
    createInterleaveViz('interleave-viz', ARCHAEOLOGY_DATA);
    createDaySelector();

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate phases on scroll
    const phases = document.querySelectorAll('.phase');
    const archetypes = document.querySelectorAll('.archetype');
    const spells = document.querySelectorAll('.spell');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    [...phases, ...archetypes, ...spells].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(el);
    });

    // Click to select day for interleave
    document.querySelectorAll('.day:not(.empty)').forEach(day => {
        day.style.cursor = 'pointer';
    });

    console.log('Prompt Archaeology loaded');
    console.log(`${ARCHAEOLOGY_DATA.summary.totalPrompts.toLocaleString()} prompts across ${ARCHAEOLOGY_DATA.summary.totalDays} days`);
});

// Scroll indicator hide on scroll
window.addEventListener('scroll', () => {
    const indicator = document.querySelector('.scroll-indicator');
    if (indicator) {
        indicator.style.opacity = window.scrollY > 100 ? '0' : '1';
    }
});
