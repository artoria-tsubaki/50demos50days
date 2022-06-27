let counts = document.querySelectorAll('.count')

counts.forEach(count => {
  // let countNum = count.getAttribute("data-count")
  // let time = 0
  // let t = setInterval(() => {
  //   if (time < countNum) {
  //     time += (countNum / 50)
  //     count.innerText = time
  //   } else {
  //     clearInterval(t)
  //   }
  // }, 50)

  count.innerText = '0'
  const updateCount = () => {
    const target = count.getAttribute("data-count")
    const c = +count.innerText

    const increment = target / 200

    if (c < target) {
      count.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target
    }
  }

  updateCount()
})