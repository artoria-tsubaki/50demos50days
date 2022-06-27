let btn = document.querySelector(".icon")
let nav = document.querySelector("#nav")

btn.addEventListener("click", () => {
    if(nav.classList.contains("active")) {
        nav.classList.remove("active")
    } else {
        nav.classList.add("active")
    }
})