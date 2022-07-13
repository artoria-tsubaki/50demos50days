const toasts = document.querySelector(".toasts")
const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
    // 生成toast
    creatToast()
}) 

function creatToast() {
    const toast = document.createElement("div")
    toast.className = 'toast'
    // 随机添加颜色样式
    addToastColorStyle(toast)
    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 3000)
}

function addToastColorStyle(dom) {
    const colors = ["danger", "info", "primary"]
    const randomNum = Math.floor(Math.random() * 3)
    dom.className += ` ${colors[randomNum]}`
    dom.innerText = `Toast ${colors[randomNum]}`
}

function removeToast(toast) {
    toast.remove()
}