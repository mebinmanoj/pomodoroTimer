var timerDisplay = document.getElementById("timer");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");

var timeLeft = 1500; // 25 minutes = 1500 seconds
var timer = null;

function updateTimer() {
    timeLeft--;

    if (timeLeft == 60) {
        timerDisplay.classList.add("timer-red");
    }

    displayTime();

    if (timeLeft <= 0) {
        clearInterval(timer);
        timer = null;
        pauseButton.textContent = "Pause";
        alert("Time's up! Take a short break.");
    }
}

function displayTime() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerDisplay.textContent = minutes + ":" + seconds;
}

startButton.onclick = function () {
    if (timer === null) {
        timer = setInterval(updateTimer, 1000);
    }
}

pauseButton.onclick = function () {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        pauseButton.textContent = "Resume";
    } else {
        timer = setInterval(updateTimer, 1000);
        pauseButton.textContent = "Pause";
    }
}

stopButton.onclick = function () {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    timerDisplay.classList.remove("timer-red");
    pauseButton.textContent = "Pause";
    displayTime();
}

displayTime();
