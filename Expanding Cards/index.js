let cardItems = document.querySelectorAll('.card-item')

cardItems.forEach(function(panel) {
    panel.addEventListener('click', function() {
        cardItems.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
    })
})