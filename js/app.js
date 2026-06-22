// Main Application Entry Point
document.addEventListener('DOMContentLoaded', () => {
    console.log('Smart Habit Tracker initialized.');

    // Connect and initialize the Pomodoro Timer module
    if (window.Timer) {
        window.Timer.init();
        console.log('Pomodoro Timer module loaded successfully.');
    } else {
        console.error('Timer module not found. Make sure js/timer.js is loaded.');
    }

    if (window.Analytics) {
        window.Analytics.init();
        console.log('Analytics module loaded successfully.');
    } else {
        console.warn('Analytics module not found. Make sure js/analytics.js is loaded.');
    }

    // Future modules (Habits, Mood, Analytics, Streaks, etc.) will be initialized here:
    // if (window.Habits) window.Habits.init();
    // if (window.Mood) window.Mood.init();
});
