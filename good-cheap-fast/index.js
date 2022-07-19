const toggles = document.querySelectorAll('.toggle')

let checkedValue = []

toggles.forEach(toggle => toggleEventInit(toggle))

function toggleEventInit (toggle) {
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
}

function doTheTrick (theClickedOne) {
  let index = checkedValue.findIndex(item => item === theClickedOne.id)

  if (index !== -1) {
    checkedValue.splice(index, 1)
  } else {
    checkedValue.push(theClickedOne.id)
  }
  
  if (checkedValue.length >= 3) {
    document.querySelector(`#${checkedValue.shift()}`).checked = false
  }
}