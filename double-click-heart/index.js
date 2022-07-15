const loveMeEl = document.querySelector('.loveMe')
let count = 0
loveMeEl.addEventListener('dblclick', loveMeDbClickHandler)

function loveMeDbClickHandler (e) {
  count++
  const { top, left } = loveMeEl.getBoundingClientRect()
  
  let x = e.pageX - left;
  let y = e.pageY - top;
  
  createHeart(x, y)
  updateTime()
}

function createHeart (x, y) {
  let heartEl = document.createElement('i')
  heartEl.className = 'heart fas fa-heart'
  heartEl.style.left = x + 'px'
  heartEl.style.top = y + 'px'
  loveMeEl.appendChild(heartEl)
  setTimeout(() => {
    heartEl.remove()
  }, 500);
}

function updateTime () {
  const timeEl = document.querySelector('.time')
  timeEl.innerText = count
}