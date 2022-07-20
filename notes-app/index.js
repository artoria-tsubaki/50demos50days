const addBtnEl = document.querySelector('#add')
const noteContainerEl = document.querySelector('.notes-container')

let notes

renderNotes()

addBtnEl.addEventListener('click', addNotesBtnEventHandler)

function addNotesBtnEventHandler () {
  createNoteDiv('')
}

function createNoteDiv (text) {
  const noteEl = document.createElement('div')
  noteEl.className = 'note'
  const noteHtml = `
    <div class="note-header">
      <button class="btn" id="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="btn" id="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <div class="note-content">
      <textarea class="${text ? 'hidden' : ''}"></textarea>
      <div class="main ${text ? '': 'hidden'}"></div>
    </div>
  `
  noteEl.innerHTML = noteHtml
  noteBtnEventHandler(noteEl)

  if(text) {
    noteEl.querySelector('.main').innerHTML = marked(text)
  }

  noteContainerEl.appendChild(noteEl)

}

function noteBtnEventHandler (noteEl) {
  const editEl = noteEl.querySelector('#edit')
  const deleteEl = noteEl.querySelector('#delete')

  editEl.addEventListener('click', editBtnEventHandler.bind(this, noteEl))
  deleteEl.addEventListener('click', deleteBtnEventHandler.bind(this, noteEl))
}

function editBtnEventHandler (noteEl) {
  const textareaEl = noteEl.querySelector('textarea')
  const main = noteEl.querySelector('.main')
  textareaEl.classList.toggle('hidden')
  main.classList.toggle('hidden')

  if(textareaEl.value) {
    main.innerHTML = marked(textareaEl.value)
    saveNote()
  }
}

function deleteBtnEventHandler(noteEl) {
  noteEl.remove()
  saveNote()
}

function saveNote() {
  localStorage.clear()
  notes = []
  const noteContents = document.querySelectorAll('p')
  noteContents.forEach(content => notes.push(content.innerText))
  localStorage.setItem('notes', JSON.stringify(notes))
}

function renderNotes() {
  let noteData = JSON.parse(localStorage.getItem('notes'))
  notes = noteData || []
  notes.length && notes.forEach(note => {
    createNoteDiv(note)
  })
}