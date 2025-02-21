// include function for timer logic, function to start, stop, pause, restart and update the timer



setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

function startTimer() {
    var seconds = 1500;
    var minutes = seconds / 60
    var seconds = 60


    var el = document.getElementById('timer');

    function incrementSeconds() {
        if (seconds == 59) {
            minutes -= 1;
        }
        seconds -= 1;
        if (seconds >= 10) {
            if (seconds == -1) {
                el.innerText = "Timer " + minutes + ":59" + seconds;
                console.log("enters at minus one")
            }
            else {
                el.innerText = "Timer " + minutes + ":" + seconds;
                console.log(seconds)
            }

        }
        // el.innerText = "Timer " + minutes + ":" + seconds;
        else if (seconds < 10) {
            el.innerText = "Timer " + minutes + ":0" + seconds;
            console.log(seconds)
        }

        if (seconds == 0) {
            seconds = 60;
        }

    }

    var cancel = setInterval(incrementSeconds, 1000);
}