let textarea = document.querySelector('#textarea');
let tagsEl = document.querySelector('.tags')

textarea.addEventListener('keyup', function (e) {
  addTag(e.target.value)
  if (e.key === 'Enter') {
    e.target.value = ''
    randomSelect()
  }
})

function addTag (value) {
  tagsEl.innerHTML = ''
  let texts = value.split(',').filter(item => item.trim() !== '').map(item => item.trim())
  texts.forEach(text => {
    let tag = document.createElement('span')
    tag.className = 'tag'
    tag.innerText = text
    tagsEl.appendChild(tag)
  })
}

function randomSelect () {
  let timeout = 100
  let t = setInterval(() => {
    let tag = getRandomTag()
    console.log(tag);
    if (tag) {
      // 高亮
      highlight(tag)

      // 移除高亮
      setTimeout(() => {
        unHighlight(tag)
      }, timeout);
    }
  }, timeout);

  // 清除计时器
  setTimeout(() => {
    clearInterval(t)

    // 选中一个tag
    setTimeout(() => {
      const randomTag = getRandomTag()
  
      highlight(randomTag)
    }, timeout / 2)
  
  }, timeout * 20)

}

function getRandomTag () {
  let tagsItem = tagsEl.querySelectorAll('.tag')
  console.log(tagsItem);
  return tagsItem[Math.floor(Math.random() * tagsItem.length)]
}

function highlight (tag) {
  tag.classList.add('highlight')
}

function unHighlight (tag) {
  tag.classList.remove('highlight')
}