const formEl = document.querySelector('#form');
const inputEl = document.querySelector('#input');
const todosEl = document.querySelector('.todos')

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e);

  addTodo()
})

init()

function init () {
  const todosData = JSON.parse(localStorage.getItem('todos'))
  todosData.forEach(todo =>addTodo(todo))
}

function addTodo (todo) {
  let inputText = inputEl.value;

  if (todo) {
    inputText = todo.value
  }

  if (inputText) {
    const todoEl = document.createElement("li")
    todoEl.innerHTML = inputText
    todoEl.classList.add("todo")

    if (todo && todo.completed) {
      todoEl.classList.add("completed")
    }

    todoEl.addEventListener("click", function (e) {
      e.target.classList.toggle("completed")
      updateLS()
    })

    // contextmenu 事件会在用户尝试打开上下文菜单时被触发。该事件通常在鼠标点击右键或者按下键盘上的菜单键时被触发
    todoEl.addEventListener("contextmenu", function (e) {
      e.preventDefault()

      e.target.remove()

      updateLS()
    })

    inputEl.value = ""

    todosEl.appendChild(todoEl)

    updateLS()
  }
}

function updateLS () {
  const lis = document.querySelectorAll(".todo")

  const todosData = [] 

  lis.forEach(li => {
    todosData.push({
      value: li.innerHTML,
      completed: li.classList.contains("completed")
    })
  })
  
  localStorage.setItem("todos", JSON.stringify(todosData))
}