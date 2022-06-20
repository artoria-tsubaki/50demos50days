const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStartEvent)
fill.addEventListener('dragend', dragEndEvent)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOverEvent)
  empty.addEventListener('dragenter', dragEnterEvent)
  empty.addEventListener('dragleave', dragLeaveEvent)
  empty.addEventListener('drop', dropEvent)
}

function dragStartEvent () {
  this.classList.add('hold')
  setTimeout(() => this.className = 'invisible', 0)
}

function dragEndEvent() {
  this.className = 'fill'
}

function dragOverEvent (e) {
  e.preventDefault();
}

function dragEnterEvent (e) {
  e.preventDefault();
  this.classList.add('hovered')
}

function dragLeaveEvent () {
  this.className = 'empty';
}

function dropEvent () {
  this.className = 'empty';
  this.append(fill)
}