console.log("timers INIT");

const maxDailyTime = 7200; //max speltid per dag: 7200s = 2h

function startGameTimer() {
    let timeChosen = document.getElementById("game-time").value;
    let dailyTimeLeft = maxDailyTime - timeChosen;

    if (dailyTimeLeft < 0) {
        alert(`Du har inte tillräckligt speltid kvar idag`);
    }
    else {
        const gameTimer = setInterval(function () {
            timeChosen--;

            let minLeft = Math.floor(timeChosen/60);
            let hoursLeft = Math.floor(minLeft/60);
            document.getElementById("timer-output").innerText = `${hoursLeft}:${minLeft % 60}:${timeChosen % 60}`;

            if (timeChosen < 0) {
                clearInterval(gameTimer);
                window.location.href = "../pages/mainPage.html"
                alert("Din spelsession är slut!");
            }
        }, 1000);
        
        const timeNow = new Date();
        timeNow.setMinutes(timeNow.getMinutes() + (Math.floor(timeChosen/60)));
        document.getElementById("time-out").innerText = `Din spelsession tar slut kl. ${timeNow.getHours()}:${timeNow.getMinutes()}`
        
    }
}

document.getElementById("start-timer").addEventListener("click", function() {
    startGameTimer();
})