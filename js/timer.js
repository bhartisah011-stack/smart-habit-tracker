(() => {
    // --- State Variables ---
    const WORK_TIME = 25 * 60; // 25 minutes in seconds
    const BREAK_TIME = 5 * 60;  // 5 minutes in seconds

    let timeLeft = WORK_TIME;
    let totalTime = WORK_TIME;
    let timerId = null;
    let isRunning = false;
    let isWorkMode = true;

    // --- DOM Elements ---
    const display = document.getElementById('time-display');
    const circle = document.getElementById('timer-circle');
    const btnStart = document.getElementById('btn-start');
    const btnReset = document.getElementById('btn-reset');
    const modeWork = document.getElementById('mode-work');
    const modeBreak = document.getElementById('mode-break');

    // Circle Math for SVG Animation
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;

    // Audio for the finish bell
    const bellSound = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');

    // --- Core Functions ---

    // Format seconds into MM:SS
    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Update circular progress bar
        const progress = timeLeft / totalTime;
        const dashoffset = circumference - (progress * circumference);
        circle.style.strokeDashoffset = dashoffset;
    }

    // The actual countdown logic
    function tick() {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            // Timer finished
            clearInterval(timerId);
            isRunning = false;
            btnStart.textContent = "Start";
            bellSound.play();

            // Optional: Auto-switch modes when finished
            // setMode(!isWorkMode); 
        }
    }

    function toggleTimer() {
        if (isRunning) {
            clearInterval(timerId);
            btnStart.textContent = "Start";
        } else {
            timerId = setInterval(tick, 1000);
            btnStart.textContent = "Pause";
        }
        isRunning = !isRunning;
    }

    function resetTimer() {
        clearInterval(timerId);
        isRunning = false;
        btnStart.textContent = "Start";
        timeLeft = isWorkMode ? WORK_TIME : BREAK_TIME;
        updateDisplay();
    }

    function setMode(toWorkMode) {
        isWorkMode = toWorkMode;
        totalTime = isWorkMode ? WORK_TIME : BREAK_TIME;

        // Update UI active states
        if (isWorkMode) {
            modeWork.classList.add('active');
            modeBreak.classList.remove('active');
        } else {
            modeBreak.classList.add('active');
            modeWork.classList.remove('active');
        }

        resetTimer();
    }

    // --- Event Listeners ---
    btnStart.addEventListener('click', toggleTimer);
    btnReset.addEventListener('click', resetTimer);

    modeWork.addEventListener('click', () => setMode(true));
    modeBreak.addEventListener('click', () => setMode(false));

    // Initialize display on load
    updateDisplay();
})();