const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.querySelector("#main")
const form = document.querySelector("#form")
const search = document.querySelector("#search")

getMovies(API_URL)

async function getMovies (url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies (data) {
  main.innerHTML = ''
  data.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie
    const El = document.createElement('div')
    El.className = 'movie'
    El.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColorByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(El)
  })
}


function getColorByRate (rate) {
  if (rate > 8) {
    return 'green'
  } else if (rate >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

// 表单的查询事件
form.addEventListener("submit", function (e) {
  e.preventDefault()
  const value = search.value

  if (value && value.trim() !== '') {
    getMovies(SEARCH_API + value)

    search.value = ''
  } else {
    window.location.reload()
  }
})