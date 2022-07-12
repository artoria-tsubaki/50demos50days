const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const downBtn = document.querySelector('.down-btn')
const upBtn = document.querySelector('.up-btn')
const slideLength = document.querySelectorAll('.left-slide>div').length

let activeSlideIndex = 0

rightSlide.style.transform = `translateY(${(slideLength - 1) * 100}vh)` // -300 -- 0

downBtn.addEventListener('click', downBtnHandler)
upBtn.addEventListener('click', upBtnHandler)

function downBtnHandler() {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
        activeSlideIndex = slideLength - 1
    }
    leftSlideContainerMove()
    rightSlideContainerMove()
}

function upBtnHandler() {
    activeSlideIndex++
    if(activeSlideIndex > slideLength - 1) {
        activeSlideIndex = 0
    }
    leftSlideContainerMove()
    rightSlideContainerMove()
}

function leftSlideContainerMove() {
    leftSlide.style.transform = `translateY(${activeSlideIndex * 100}vh)`
}

function rightSlideContainerMove() {
    rightSlide.style.transform = `translateY(${(slideLength - 1 - activeSlideIndex) * 100}vh)`
}