console.log("memory INIT");
addPlay();

let firstCard = true;
let previousCard = "";
let previousCardId = "";

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function compareCards(evt) {
    let currentCard = evt.getAttribute("card");
    if (firstCard == true) {
        previousCard = currentCard;
        previousCardId = evt.id;
        firstCard = false;
    } else {
        if (currentCard == previousCard) {
            console.log("match");
            lockCards(previousCardId, evt.id);
        } else {
            console.log("no match");
            setTimeout(() => turnCardsBack(previousCardId, evt.id), 600);
        }
        firstCard = true;
        checkForGameOver();
    }
}

function addPlay() {
    let plays = localStorage.getItem("userPlays")
    plays++;
    localStorage.setItem("userPlays", plays);
}

function turnCardsBack(first, second) {
    document.getElementById(first).setAttribute("src", "../assets/images/memory-images/card-back.png");
    document.getElementById(second).setAttribute("src", "../assets/images/memory-images/card-back.png");
}

function lockCards(first, second) {
    document.getElementById(first).setAttribute("locked", "true");
    document.getElementById(second).setAttribute("locked", "true");
}

function checkForGameOver() {
        let score = document.querySelectorAll("#game > img[locked='true']").length;
        if (score == cards8.length) {
            document.getElementById("game-over").innerHTML = "You win!";
            document.querySelector("#game-over").style.display = "flex";
        }
}

function closeYouWin() {
    document.querySelector("#game-over").style.display = "none";
    shuffle(cards8);
    addPlay();
    document.querySelectorAll("#game > img").forEach((elem) => {
        elem.setAttribute("src","../assets/images/memory-images/card-back.png");
        elem.setAttribute("locked", "false");
    })
}

const cards8 = [
    "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9",
    "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"
]

shuffle(cards8);

for (let i = 0; i < cards8.length; i++) {
    document.getElementById("game").innerHTML += `
    <img id="${i}" locked="false" card="${cards8[i]}" src="../assets/images/memory-images/card-back.png">
    `
}

document.querySelectorAll("#game > img").forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.getAttribute("locked") == "false") {
            document.getElementById(elem.id).setAttribute("src", "../assets/images/memory-images/" + cards8[elem.id] + ".png");
            compareCards(elem);
        }
    });
});

document.getElementById("game-over").addEventListener("click", closeYouWin);

let userPlays = localStorage.getItem("userPlays");
document.getElementById("user-plays").innerHTML = `You have played: ${userPlays} times`

