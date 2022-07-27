const lisEl = document.querySelectorAll('li');
const contentsEl = document.querySelectorAll('.content')

lisEl.forEach((li, index) => {
    li.addEventListener('click', navClickHandler.bind(li, index))
})

function navClickHandler(index) {
    resetLisElStyle()
    this.classList.add('active')
    resetContentsElStyle()
    contentsEl[index].classList.add('show')
}

function resetLisElStyle() {
    lisEl.forEach(li => li.classList.remove('active'))
}

function resetContentsElStyle() {
    contentsEl.forEach(content => content.classList.remove('show'))
}