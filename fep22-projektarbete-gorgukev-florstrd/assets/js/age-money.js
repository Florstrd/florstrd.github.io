function checkAge() {
let playerAge = document.getElementById("input-field").value;
if (playerAge < 18) {
    alert("Minderårig! Du måste vara 18 för att kunna spela");
}
else {
    console.log(playerAge);
}
}

function moneyInput() {
    let playerMoney = document.getElementById("moneyInput").value;
    let playerMoney2 = playerMoney.replace(",", ".");
    console.log(playerMoney2);
    }