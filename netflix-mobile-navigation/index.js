const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav')

menuBtn.addEventListener('click', (e) => {
  navs.forEach(nav => nav.classList.add('visible'))
})

closeBtn.addEventListener('click', (e) => {
  navs.forEach(nav => nav.classList.remove('visible'))
})