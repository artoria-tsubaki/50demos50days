const containerEl = document.querySelector('.imgs-container');
const unsplashURL = 'https://source.unsplash.com/random/'

const row = 5

const getRandoomSideLength = function () {
  return Math.floor(Math.random() * 10) + 300
}

const generateImg = function () {
  const img = document.createElement('img')
  containerEl.appendChild(img)

  return {
    setSrc: function (src) {
      img.src = src
    }
  }
}

// 代理模式懒加载
const proxyGenerateImg = function () {
  var proxyImg = document.createElement('img')

  var originImg = generateImg()

  proxyImg.onload = function () {
    originImg.setSrc(this.src)
  }

  return {
    setSrc: function (src) {
      originImg.setSrc('./placeholder.jpg')
      proxyImg.src = src
    }
  }
}

for (let i = 0; i < row * 3; i++) {
  proxyGenerateImg().setSrc(`${unsplashURL}${getRandoomSideLength()}x${getRandoomSideLength()}`)
}
