const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let x, y
let isPress = false
colorEl.value = 'black'
let color = colorEl.value

canvas.addEventListener('mousedown', (e) => {
  isPress = true

  x = e.offsetX
  y = e.offsetY
})

document.addEventListener('mouseup', e => {
  isPress = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', e => {
  if (isPress) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, x2, y, y2)

    x = x2
    y = y2
  }
})

// 起点使用 arc 方法来绘制圆点 fill方法完成绘制
function drawCircle (x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

// 线段使用 moveTo + lineTo方法 完成线段移动 stroke方法完成绘制
function drawLine(x1, x2, y1, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

increaseBtn.addEventListener('click', e => {
  if (size >= 50) {
    size = 50
  } else {
    size += 5
  }
  updateSizeShow()
})

decreaseBtn.addEventListener('click', e => {
  if (size <= 5) {
    size = 5
  } else {
    size -= 5
  }
  updateSizeShow()
})

function updateSizeShow () {
  sizeEl.innerText = size
}

colorEl.addEventListener('change', (e) => color = e.target.value)

// 清空canvas clearRect(0, 0, width, height)
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))