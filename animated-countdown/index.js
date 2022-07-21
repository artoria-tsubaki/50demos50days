const numsEl = document.querySelectorAll('.nums span')
const counterEl = document.querySelector('.counter')
const finalEl = document.querySelector('.final')
const replayEl = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counterEl.classList.remove('hide')
  finalEl.classList.remove('show')

  numsEl.forEach((num) => {
    num.classList.value = ''
  })

  numsEl[0].classList.add('in')
}

function runAnimation () {
  const nextToLast = numsEl.length
  numsEl.forEach((num, idx) => {
    num.addEventListener('animationend', (e) => {
      if (e.animationName == 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName == 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counterEl.classList.add('hide')
        finalEl.classList.add('show')
      }
    })
  })
}

replayEl.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})