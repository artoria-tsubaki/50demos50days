const questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "C++",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
]

const quizEl = document.querySelector(".card-container")

// 问题编号
let quizNo = 0
// 正确问题编号
const correctQuizNos = []

function renderQuiz () {
  const quiz = questions[quizNo]
  quizEl.innerHTML = `
    <div class="quiz-header">
      <h2 id="question">${quiz.question}</h2>
      <ul>
        <li>
          <input type="radio" id="a" name="answer" class="answer">
          <label for="a" id="a_text">${quiz.a}</label>
        </li>
        <li>
          <input type="radio" id="b" name="answer" class="answer">
          <label for="b" id="b_text">${quiz.b}</label>
        </li>
        <li>
          <input type="radio" id="c" name="answer" class="answer">
          <label for="c" id="c_text">${quiz.c}</label>
        </li>
        <li>
          <input type="radio" id="d" name="answer" class="answer">
          <label for="d" id="d_text">${quiz.d}</label>
        </li>
      </ul>
    </div>
    <button id="submit">Submit</button>
  `

  const submitButtonEl = document.querySelector("#submit")
  submitButtonEl.addEventListener("click", function (e) {
    let selectedEl = document.querySelector("input[type='radio']:checked")
    if (selectedEl) {
      // 判断正误
      selectedEl.getAttribute("id") === questions[quizNo].correct && correctQuizNos.push(quizNo)
      
      quizNo++

      if (quizNo >= questions.length) {
        renderResult()
      } else {
        renderQuiz()
      }
    }
  })
}

function renderResult () {
  quizEl.innerHTML = `
    <div class="quiz-header">
      <h2 id="question">You answered ${correctQuizNos.length}/${questions.length} questions correctly</h2>
    </div>
    <button id="reload">Reload</button>
  `
  const reloadButtonEl = document.querySelector("#reload")
  reloadButtonEl.addEventListener("click", function (e) {
    location.reload()
  })
}

renderQuiz()