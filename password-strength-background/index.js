const pwdEl = document.getElementById('password');
const bgEl = document.getElementById('bg')

pwdEl.addEventListener('input', (e) => {
  let length = e.target.value.length;
  let blur = scale(length, 0, 12, 0, 20)
  // 长度为12位时，图片不再模糊
  bgEl.style.filter = `blur(${20 - blur}px)`
})

function scale (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}