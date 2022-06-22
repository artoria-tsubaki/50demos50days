let btns = document.querySelectorAll('.fas')

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let faq = e.target.parentNode.parentNode
    if (faq.classList.contains("active")) {
      faq.classList.remove("active")
    } else {
      faq.classList.add("active")
    }
  })
});