const addBtnEl = document.querySelector('#add')
const noteContainerEl = document.querySelector('.notes-container')

const notes = []

addBtnEl.addEventListener('click', addNotesBtnEventHandler)

function addNotesBtnEventHandler (text = '') {
  createNoteDiv(text)
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
  noteContainerEl.appendChild(noteEl)

  noteBtnEventHandler()
}

function noteBtnEventHandler () {
  const editEl = document.querySelector('#edit')
  const deleteEl = document.querySelector('#delete')

  editEl.addEventListener('click', editBtnEventHandler)
  deleteEl.addEventListener('click', deleteBtnEventHandler)
}

function editBtnEventHandler () {
    const textareaEl = document.querySelector('textarea')
    const main = document.querySelector('.main')
    textareaEl.classList.toggle('hidden')
    main.classList.toggle('hidden')
}