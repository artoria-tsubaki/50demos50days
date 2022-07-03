const sliders = document.querySelectorAll('.slider')
const sliderLength = sliders.length
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')
const body = document.querySelector("body")
let activeIndex = 0

function hiddeAllSlider() {
    sliders.forEach(slider => slider.classList.remove('active'))
}

function MakeSliderShow(index) {
    sliders[index].classList.add('active')
}

function setBodyBgImg() {
    body.style.backgroundImage = sliders[activeIndex].style.backgroundImage
}

function init() {
    leftBtn.addEventListener('click', leftBtnClickHandler)
    rightBtn.addEventListener('click', rightBtnClickHandler)
    MakeSliderShow(activeIndex)
    setBodyBgImg()
}

function leftBtnClickHandler() {
    hiddeAllSlider()
    if(activeIndex == 0) {
        activeIndex = sliderLength - 1
    } else {
        activeIndex--
    }
    MakeSliderShow(activeIndex)
    setBodyBgImg(activeIndex)
}

function rightBtnClickHandler() {
    hiddeAllSlider()
    if(activeIndex == sliderLength - 1) {
        activeIndex = 0
    } else {
        activeIndex++
    }
    MakeSliderShow(activeIndex)
    setBodyBgImg(activeIndex)
}

init()