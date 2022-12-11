document.querySelectorAll('.thumb').forEach((elem) => {
    console.log(elem)

    elem.addEventListener('click', () => {
        document.querySelector('#lightbox > img').setAttribute('src', elem.getAttribute('data-big'))
        document.querySelector('#lightbox').style.display ='flex'
    })
    
})
    
document.querySelector('#lightbox').addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    document.querySelector('#lightbox').style.display ='none'
    
})

document.querySelector('#lightbox-btn').addEventListener('click', () => {
    document.querySelector('#lightbox').style.display ='none'
})