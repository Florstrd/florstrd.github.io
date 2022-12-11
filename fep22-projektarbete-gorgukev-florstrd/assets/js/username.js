
//Användarnamnfälten
function alertMessage() {
    let förnamn = document.querySelector('#förnamn').value
    let efternamn = document.querySelector('#efternamn').value
    if (efternamn == "" || förnamn == "" || förnamn == "" && efternamn == "") {
        alert("Rutan är tom")
    }
    else {
        username = efternamn.slice(0, 2)
        document.querySelector('#förOchEfternamn').innerText =
            `Var hälsad ${förnamn} ditt utvalda namn är ${förnamn.toLowerCase()}${username.toLowerCase()}`;
    }
    
    let playerAge = document.getElementById("input-field").value;
    localStorage.setItem("userAge", playerAge);
if (playerAge < 18) {
    alert("Minderårig! Du måste vara 18 för att kunna spela");
}

let playerMoney = document.getElementById("moneyInput").value;
let playerMoney2 = playerMoney.replace(",", ".");
console.log(playerMoney2);
localStorage.setItem("userMoney", playerMoney2);
}




