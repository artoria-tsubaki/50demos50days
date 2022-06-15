let closeBtn = document.querySelector("#close");
let openBtn = document.querySelector("#open");
let containerBox = document.querySelector('.container')

closeBtn.addEventListener("click", () => {
    containerBox.classList.remove("show-nav")
})

openBtn.addEventListener("click", () => {
    containerBox.classList.add("show-nav")
})