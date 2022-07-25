const containerEl = document.querySelector(".board-container")
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for (let index = 0; index < SQUARES; index++) {
    const square = document.createElement("div")
    square.classList.add('square')

    square.addEventListener('mouseover', () => setSquareColor(square))
    square.addEventListener('mouseout', () => removeSquareColor(square))

    containerEl.appendChild(square)
}

function setSquareColor(square) {
    const color = getRandomColor()
    square.style.background = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeSquareColor(square) {
    square.style.background = '#1d1d1d'
    square.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}