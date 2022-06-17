let boards = document.querySelectorAll('.board-item')
let audios = document.querySelectorAll('.audio-item')


window.addEventListener('keydown', function (e) {
  // 清空所有样式和音乐
  clear()
  // 按下事件
  keyDownFunc(e)
})

function clear () {
  boards.forEach(function (board) {
    board.classList.remove('active')
  })
  audios.forEach(function (audio) {
    audio.pause()
  })
}

function keyDownFunc (e) {
  boards.forEach((board, index) => {
    if (board.getAttribute("data-keyCode") == e.keyCode) {
      board.classList.add("active")
      audios[index].play()
    }
  })
}