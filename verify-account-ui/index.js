const codes = document.querySelectorAll('.code')
const btn = document.querySelector('.btn')

codes[0].focus()

codes.forEach((code, index) => {
    code.addEventListener('keydown', e => {
        console.log(e.key);
        if(e.key >= 0 && e.key <= 9) {
            codes[index].value = ''
            setTimeout(() =>  codes[index + 1]?.focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[index - 1].focus(), 10)
        }
    })
})

// function checkCodeComplete() {
//     return [...codes].every(code => code.value)
// }

// function changeButtonStatus() {
//     if(checkCodeComplete()) {
//         btn.classList.add('active')
//     } else {
//         btn.classList.remove('active')
//     }
// }

// changeButtonStatus()