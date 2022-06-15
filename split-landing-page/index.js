let items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', function (e) {
    item.classList.add('active')
  })
  item.addEventListener('mouseleave', function (e) {
    item.classList.remove('active')
  })
})