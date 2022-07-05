const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {

  const { left: btnLeft, top: btnTop } = btn.getBoundingClientRect()

  const circle = document.createElement("span")
  circle.className = "circle"
  circle.style.left = e.clientX - btnLeft + "px"
  circle.style.top = e.clientY - btnTop + "px"
  btn.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})