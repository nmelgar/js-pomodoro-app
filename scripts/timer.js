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
        if (seconds = 59) {
            minutes -= 1
        }
        seconds -= 1;
        // el.innerText = "Timer " + minutes + ":" + seconds;
        el.innerText = "Timer " + minutes + ":" + seconds;
    }

    var cancel = setInterval(incrementSeconds, 1000);
}