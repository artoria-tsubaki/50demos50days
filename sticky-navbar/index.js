const nav = document.querySelector('.nav')

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    if(window.scrollY > nav.clientHeight + 100) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})