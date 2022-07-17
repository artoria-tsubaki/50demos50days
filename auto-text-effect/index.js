const textEl = document.querySelector("#text")
const inputEl = document.querySelector("#speedInput")
const cursorEl = document.querySelector('.typed-cursor')
const text  = 'We Love Programming!'

let speed = 300 / inputEl.value
let idx = 1
let order = 'asc'

function createTextEffect() {
    textEl.innerText = text.slice(0, idx)
    createCursorEffect()

    if(order == 'asc') {
        ascTextEffect()
    } else if(order == 'desc') {
        descTextEffect()
    }


    setTimeout(createTextEffect, speed);
}

function ascTextEffect() {
    idx++

    if(idx > text.length) {
        order = 'desc'
    }
}

function descTextEffect() {
    idx--

    if(idx < 1) {
        order = 'asc'
    }
}

function createCursorEffect() {
    if(idx == text.length) {
        cursorEl.classList.add('hide')
    } else {
        cursorEl.classList.contains('hide') && cursorEl.classList.remove('hide') 
    }
}

createTextEffect()

inputEl.addEventListener('input', (e) => {
    if(e.target.value > 0 && e.target.value < text.length) {
        speed = 300 / e.target.value
    } else {
        if(e.target.value < 0) {
            e.target.value = 1
        } else if(e.target.value > text.length) {
            e.target.value = text.length
        }
    }
})