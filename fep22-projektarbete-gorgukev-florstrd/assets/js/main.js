
//Navigation add items
const navArray =
    [
        { URL: "mainPage.html", class1: "nav-item", class2: "nav-link", title: "Home" },
        { URL: "memory.html", class1: "nav-item", class2: "nav-link", title: "Memory" },
        { URL: "rps.html", class1: "nav-item", class2: "nav-link", title: "RPS" },
        { URL: "lightbox.html", class1: "nav-item", class2: "nav-link", title: "Gallery" },
        { URL: "theme.html", class1: "nav-item", class2: "nav-link", title: "Change theme" }
        
    ]

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {

    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll('.nav-link').forEach(elem => elem.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))


for (i = 0; i < navArray.length; i++) {
    const list = document.querySelector('.nav-menu')
    list.innerHTML += `
    <li class="${navArray[i].class1}"> 
    <a href="${navArray[i].URL}" class="${navArray[i].class2}">${navArray[i].title}</a>
    </li>
    `
}


//Thema
function setBackground(color) {
    let display = document.querySelector('body');
    display.style.background = color;
    localStorage.setItem("color", color);

}
//Color localStorage
setBackground(localStorage.getItem('color'))
    if (localStorage.getItem("color") == null) {
        setBackground("#262626");
    }

function setTextColor(textColor){
    let display = document.querySelector('body');
    display.style.color = textColor;
    localStorage.setItem("textColor", textColor);

}
setTextColor(localStorage.getItem('textColor'))
    if (localStorage.getItem("textColor") == null) {
        setTextColor("rgb(255, 255, 255)");
    }

function setHeader(headerColor) {
    const header = document.querySelector('header');
    header.style.background = headerColor;
    localStorage.setItem("headerColor", headerColor);
}

setHeader(localStorage.getItem('headerColor'))
    if (localStorage.getItem("headerColor") == null) {
        setHeader("DarkSlateGrey");
    }

//DATE
setInterval(myTimer, 1000)
function myTimer()
{

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let d = new Date().getDate()
let mon = new Date().getMonth() + 1
let y = new Date().getFullYear()
let h  = new Date().getHours()
let m  = new Date().getMinutes()
let s  = new Date().getSeconds()

day.innerHTML = d;
month.innerHTML = mon;
year.innerHTML = y;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
if (h >= 12)
{
ampm.innerText = `PM`
}

}
