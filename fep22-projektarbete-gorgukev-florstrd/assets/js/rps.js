console.log('rps INIT'); // För att se att skriptet laddats in

const rps = [
    { tool: "Rock", wins: "Scissors", loses: "Paper", ties: "Rock" },
    { tool: "Paper", wins: "Rock", loses: "Scissors", ties: "Paper" },
    { tool: "Scissors", wins: "Paper", loses: "Rock", ties: "Scissors" }
]

let playerTool;
const casinoPrint = document.getElementById("casino-result");
const playResult = document.getElementById("result");
let playerMoney = Number(localStorage.getItem("userMoney"));
let betAmount = null;


for (let i = 0; i < 3; i++) {
    document.getElementById("buttons").innerHTML += `
<button onclick="playerChoice(${i})">${rps[i].tool}</button>
`
};

function addPlay() {
    let plays = localStorage.getItem("userPlays")
    plays++;
    localStorage.setItem("userPlays", plays);
}

function playerChoice(i) {
    console.log(rps[i].tool);
    betAmount = document.getElementById("bet").value;
    if (localStorage.getItem("userAge") < 18) {
        alert("You are not old enough to play!")
    } else {
        if (betAmount > playerMoney) {
            alert("You do not have enough money");
        } else {
            addPlay();
            playerMoney -= betAmount;
            document.getElementById("player-result").innerHTML = `
        Your choice: ${rps[i].tool}
        `

            const fiftyFifty = Math.floor(Math.random() * 2);

            if (fiftyFifty == 0) {
                casinoPrint.innerHTML = `
            Casinos choice: ${rps[i].loses}
            `
                playResult.innerHTML = `
                Casino wins with ${rps[i].wins}
                `
            }
            else {
                let randomizer = (Math.floor(Math.random() * 3));

                if (randomizer == 0) {
                    casinoPrint.innerHTML = `
                Casinos choice: ${rps[i].wins}
                `
                    playResult.innerHTML = `
                You win with ${rps[i].tool}
                `
                    playerMoney += Number(betAmount * 2);
                } else if (randomizer == 1) {
                    casinoPrint.innerHTML = `
                Casinos choice: ${rps[i].loses}
                `
                    playResult.innerHTML = `
                Casino wins with ${rps[i].wins}
                `
                } else {
                    casinoPrint.innerHTML = `
                Casinos choice: ${rps[i].ties}
                `
                    playResult.innerHTML = `
                It's a tie with ${rps[i].ties}
                `
                    playerMoney += Number(betAmount);
                }

            }
            document.getElementById("money").innerHTML = "Your balance: " + playerMoney + "€";
            localStorage.setItem("userMoney", playerMoney);
            document.getElementById("user-plays").innerHTML = `You have played: ${userPlays} times`
        }
    }
}
document.getElementById("money").innerHTML = "Your balance: " + playerMoney + "€";

let userPlays = localStorage.getItem("userPlays");
document.getElementById("user-plays").innerHTML = `You have played: ${userPlays} times`