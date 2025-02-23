// include function for timer logic, function to start, stop, pause, restart and update the timer
let timerInterval;

function myTimer() {
    // function to display current time
    const d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
setInterval(myTimer, 1000);

function selectTime() {
    // function to get the time according to user's selection
    // available options are 5:00, 15:00, 25:00
    const timeSelector = document.getElementById('minutes');
    const timeValue = timeSelector.value;

    if (timeValue === "five-minutes") {
        return 300;
    } else if (timeValue === "fifteen-minutes") {
        return 900;
    } else if (timeValue === "twentyfive-minutes") {
        return 1500;
    }
}

function startTimer() {
    let timeInSeconds = selectTime();
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    const timeText = document.getElementById('timer');

    function updateTimer() {
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            timeText.innerText = "00:00";
            return;
        }

        minutes = Math.floor(timeInSeconds / 60);
        seconds = timeInSeconds % 60;

        timeText.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeInSeconds--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    const timeText = document.getElementById('timer');
    timeText.innerText = "00:00";
}