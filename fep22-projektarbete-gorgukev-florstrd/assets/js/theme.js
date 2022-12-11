const select = document.querySelector('#theme');
const body = document.querySelector('body');
const header = document.querySelector('header');

//Selevt
select.addEventListener('change', () => {
    const selectValue = select.value;
    const headerColor = select.options[select.selectedIndex].getAttribute('data-header')
    setBackground(selectValue)
    setHeader(headerColor)
    console.log(headerColor)
}
)

function setBackground(color,headerColor) {
    let display = document.querySelector('body');
    display.style.background = color;
    localStorage.setItem("color", color);
}

function setHeader(headerColor) {
    const header = document.querySelector('header');
    header.style.background = headerColor;
    localStorage.setItem("headerColor", headerColor);
}
//const backgroundColor = localStorage.getItem('color');
setBackground(localStorage.getItem('color'))
setTextColor(localStorage.getItem('textColor'))

    const input = document.querySelectorAll('input');

    for (i = 0; i < input.length; i++) {
        input[i].addEventListener('input', () => {
            let red = document.getElementById('red').value;
            let green = document.getElementById('green').value;
            let blue = document.getElementById('blue').value;

          
           document.body.style.color = "rgb(" + red + ", " + green + ", " + blue + ")"
            setTextColor("rgb(" + red + ", " + green + ", " + blue + ")")
        })
    }

    function setTextColor(textColor){
        let display = document.querySelector('body');
        display.style.color = textColor;
        localStorage.setItem("textColor", textColor);

    }
   
   