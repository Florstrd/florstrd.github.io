

console.log(document.querySelector('#select').value = new Date().getDay())
let minTimer = null
function getSelectValue() {
    let selectValue = document.querySelector('#select').value
    lockdown(selectValue)
}

function lockdown(selectValue){

    let hoursLeft = null
    let minutesLeft = null
    let secondsLeft = null
    if (minTimer) clearInterval(minTimer)
    if (selectValue == '6') {
        secondsLeft = 2880 * 60
        
    } else if (selectValue == '0')  {
        secondsLeft = 1440 * 60 
        
    } else  { 
        return document.getElementById('out').innerHTML = 'Fritt fram och spela!!'
     }
   
    document.querySelectorAll('.nav-item').forEach((elem) => {
        elem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg> `
    })

    const countdownEl = document.getElementById("out")

    minTimer = setInterval(function () {

        hoursLeft = Math.floor(minutesLeft / 60)
        minutesLeft = Math.floor(secondsLeft / 60)

        countdownEl.innerHTML =`

        Vi öppnar om: ${hoursLeft}:${minutesLeft % 60}:${secondsLeft % 60}
        `
        secondsLeft--;
        if (secondsLeft <= 0) {

            clearInterval(minTimer) 
        }
    }, 1000)
}