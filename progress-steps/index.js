let preBtn = document.querySelector("#prev")
let nextBtn = document.querySelector("#next")
let progress = document.querySelector("#progress")
let circles = [...document.querySelectorAll(".circle")]


let activeIndex = 0

preBtn.addEventListener("click", () => {
    activeIndex--
    countChangeEvent()
});

nextBtn.addEventListener("click", () => {
    activeIndex++
    countChangeEvent()
});

function countChangeEvent() {
    if(activeIndex == 0) {
        preBtn.disabled = true
    } else {
        preBtn.disabled = false
    }

    if(activeIndex == circles.length - 1) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
    }

    circles.forEach((circle, index) => {
        if(index <= activeIndex) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    progress.style.width = activeIndex / (circles.length - 1) * 100 + '%'
}