let preBtn = document.querySelector("#prev")
let nextBtn = document.querySelector("#next")
let progress = document.querySelector("#progress")
let circles = [...document.querySelectorAll(".circle")]


let obj = {
    activeIndex: 0
}

preBtn.addEventListener("click", () => {
    p.activeIndex--
    // countChangeEvent()
});

nextBtn.addEventListener("click", () => {
    p.activeIndex++
    // countChangeEvent()
});

let p = new Proxy(obj, {
    set: function (target, property, value, receiver) {
        if(property === 'activeIndex') {
            var res = Reflect.set(target, property, value, receiver)
            countChangeEvent()
            return res
        }
    }
})

function countChangeEvent() {
    if(p.activeIndex == 0) {
        preBtn.disabled = true
    } else {
        preBtn.disabled = false
    }

    if(p.activeIndex == circles.length - 1) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
    }

    circles.forEach((circle, index) => {
        if(index <= p.activeIndex) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    progress.style.width = p.activeIndex / (circles.length - 1) * 100 + '%'
}