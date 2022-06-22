window.addEventListener('keydown', keyDownHandler)

const container = document.querySelector('.container')

function keyDownHandler (e) {
  // 清空 container
  container.innerHTML = ''
  // 插入卡片
  const html = `<div class="entered">
    <div class="key-item">
      <div class="title">event.key</div>
      <div class="card">${e.key === ' ' ? 'Space' : e.key}</div>
    </div>
    <div class="key-item">
      <div class="title">event.keyCode</div>
      <div class="card">${e.keyCode}</div>
    </div>
    <div class="key-item">
      <div class="title">event.code</div>
      <div class="card">${e.code}</div>
    </div>
  </div>`
  container.innerHTML = html
}