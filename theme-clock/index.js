const body = document.querySelector('body');
const toggle = document.querySelector('.toggle')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const dayEl = document.querySelector('.day')

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function init () {
  addBtnEvents()
  getTime()

  setInterval(() => {
    getTime()
  }, 1000);
}

function addBtnEvents () {
  toggle.addEventListener('click', (e) => {
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      e.target.innerHTML = 'Dark Mode'
    } else {
      body.classList.add('dark');
      e.target.innerHTML = 'Light Mode'
    }
  })
}

function getTime () {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate()
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  setTimeElContent(hour, minute)
  setDateElContent(day, month, date)

  clockRun(hour, minute, second)
}

function setTimeElContent (hour, minute) {
  timeEl.innerHTML = `${hour >= 12 ? hour - 12 : hour}:${new String(minute).padStart(2, 0)} ${hour < 12 ? 'AM': 'PM'}`
}

function setDateElContent (day, month, date) {
  dayEl.innerHTML = date
  dateEl.innerHTML = `${days[day]},${months[month]}`
  dateEl.appendChild(dayEl)
}

function clockRun (hour, minute, second) {
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

init()