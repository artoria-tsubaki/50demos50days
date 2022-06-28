const waterItems = document.querySelectorAll('.water-item');
const sumBoxRemained = document.querySelector('.remained')
const count = document.querySelector('.count')
const sumBoxPer = document.querySelector('.per')

// 自执行函数绑定 index
for (let index = 0; index < waterItems.length; index++) {
  (function (curIndex) {
    waterItems[index].onclick = function (e) {
      console.log(curIndex);
      // 执行喝水方法
      drinkWaterHandler(curIndex)
    }
  })(index)
}

function drinkWaterHandler (curIndex) {
  // 单个水杯处理
  if (curIndex === 7 && waterItems[curIndex].classList.contains("fill")) curIndex--
  else if(waterItems[curIndex].classList.contains("fill") && !waterItems[curIndex].nextElementSibling.classList.contains("fill")) curIndex--
  
  waterItems.forEach((waterItem, index) => {
    if (index <= curIndex) {
      waterItem.classList.add('fill')
    } else {
      waterItem.classList.remove('fill')
    }
  })

  // 总喝水处理
  const fillLength = document.querySelectorAll('.fill').length
  if (fillLength == 0) {
    sumBoxPer.style.visibility = 'hidden'
    sumBoxRemained.style.visibility = 'visible'
  } else if (fillLength == 8) {
    sumBoxPer.style.visibility = 'visible'
    sumBoxRemained.style.visibility = 'hidden'
  } else {
    sumBoxPer.style.visibility = 'visible'
    sumBoxRemained.style.visibility = 'visible'
  }
  const remained = ((8 - fillLength) / 8 * 100).toFixed(2)
  const per = (fillLength / 8 * 100).toFixed(2)
  sumBoxRemained.style.height = remained + '%'
  sumBoxPer.style.height = per + '%'
  count.innerHTML = (8 - fillLength) / 8 * 2 + 'L'
  sumBoxPer.innerHTML = (fillLength / 8 * 100) + '%'
}