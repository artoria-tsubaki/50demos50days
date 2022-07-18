const resultEl = document.querySelector('.result')
const clipboardEl = document.querySelector('#clipboard')
const lengthEl = document.querySelector('#length')
const uppercaseEl = document.querySelector('#uppercase')
const lowercaseEl = document.querySelector('#lowercase')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')
const generatorEl = document.querySelector('#generator')

const randomFunc = {
  upper: getRandomUppercaseString,
  lower: getRandomLowercaseString,
  number: getRandomNumberString,
  symbol: getRandomSymbolString
}

generatorEl.addEventListener('click', passwordGeneratorClickHandler)
clipboardEl.addEventListener('click', clipboardElClickHandler)

function clipboardElClickHandler () {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if (!password) {
    alert('No Password')
    return
  }

  textarea.innerText = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  alert('Copy Password Successfully')
}

function passwordGeneratorClickHandler () {
  const length = lengthEl.value
  const uppercase = uppercaseEl.checked
  const lowercase = lowercaseEl.checked
  const numbers = numbersEl.checked
  const symbols = symbolsEl.checked

  generatePassword(length, uppercase, lowercase, numbers, symbols)
}

function generatePassword (length, upper, lower, number, symbol) {
  resultEl.innerText = ''

  const typesCount = lower + upper + number + symbol
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

  if (typesCount == 0) {
    return 
  }

  let reuslt = ''
  
  for (let index = 0; index < length; index++) {
    const randomType = Object.getOwnPropertyNames(typesArr[Math.floor(Math.random() * typesArr.length)])[0]
    reuslt += randomFunc[randomType]()
  }

  resultEl.innerText = reuslt
}

function getRandomLowercaseString () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUppercaseString () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumberString () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbolString () {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}