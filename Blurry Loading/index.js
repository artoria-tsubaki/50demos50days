const bg = document.querySelector('.bg');
const progress = document.querySelector('.text');

let loading = 0

let t = setInterval(load, 30)

function load() {
    loading++

    
    if(loading > 99) {
        clearInterval(t)
    }
    progress.innerText = `${loading}%`
    progress.style.opacity = scale(loading, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

load()

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}