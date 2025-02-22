// include function for timer logic, function to start, stop, pause, restart and update the timer
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


function getTimeInSeconds(timeInSeconds) {
    // function to get desired times in seconds to convert in minutes
    // get the time in seconds based on user's input
    timeInSeconds = selectTime()
    var minutes = timeInSeconds / 60
    return minutes

}

function startTimer(minutes) {
    // get the minutes
    minutes = getTimeInSeconds();

    // use seconds
    var seconds = 60
    var timeText = document.getElementById('timer');

    function decrementSeconds() {
        seconds -= 1;
        if (seconds == 59) {
            minutes -= 1;
        }

        if (seconds >= 10) {
            if (seconds == -1) {
                timeText.innerText = minutes + ":59" + seconds;
                // console.log("enters at minus one")
            }
            else {
                timeText.innerText = minutes + ":" + seconds;
                console.log(seconds)
            }

        }
        // el.innerText = "Timer " + minutes + ":" + seconds;
        else if (seconds < 10) {
            timeText.innerText = minutes + ":0" + seconds;
            // console.log(seconds)
        }

        if (seconds == 0) {
            seconds = 60;
        }
    }

    setInterval(decrementSeconds, 1000);
}