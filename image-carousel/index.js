const imgContainerEl = document.querySelector('.img-container');
const imgs = imgContainerEl.querySelectorAll('img')
const prevEl = document.querySelector('#prev')
const nextEl = document.querySelector('#next')

let activeIndex = 0

prevEl.addEventListener("click", prevEventHandler)
nextEl.addEventListener("click", nextEventHandler)

let t = setInterval(run, 1500)

function run () {
  activeIndex++
  changeImage()
}

function changeImage () {
  if (activeIndex >= imgs.length) {
    activeIndex = 0
  } else if(activeIndex < 0) {
    activeIndex = imgs.length - 1
  }

  imgContainerEl.style.transform = `translateX(-${activeIndex * 500}px)`
}

function resetInterval () {
  clearInterval(t)
  t = setInterval(run, 1500)
}

function prevEventHandler () {
  activeIndex--
  changeImage()
  resetInterval()
}

function nextEventHandler () {
  activeIndex++
  changeImage()
  resetInterval()
}