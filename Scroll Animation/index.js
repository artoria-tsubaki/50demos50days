window.addEventListener("scroll", scrollEvent)

const boxes = document.querySelectorAll(".box")

scrollEvent()

function scrollEvent(e) {
    const bottom = window.innerHeight * (4 / 5);

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < bottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}