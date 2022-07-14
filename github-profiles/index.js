const APIURL = 'https://api.github.com/users/'

const main = document.querySelector('main')
const form = document.querySelector('#form')
const input = document.querySelector('#search')

async function getUser (username) {
  try {
    const { data } = await axios(APIURL + username)
    console.log(data);

    createUserCard(data)
    getRepos(username)

  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('No profile with this username')
    }
  }
}

async function getRepos (username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (error) {
    createErrorCard('Problem fetching repos')
  }
}

function createUserCard (user) {
  const userID = user.name || user.login
  const userBio = user.bio ? `<p  class="desc">${user.bio}</p>` : ''
  const cardHTML = `
    <div class="card">
      <div class="avatar">
        <img src="${user.avatar_url}" alt="avatar">
      </div>
      <div class="info">
        <h2 class="name">${userID}</h2>
        ${userBio}
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div class="repos">
        </div>
      </div>
    </div>
  `
  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.querySelector('.repos')

  repos.slice(0, 5).forEach(repo => {
    const aEl = document.createElement('a')
    aEl.innerText = repo.name
    aEl.className = 'repo'
    aEl.target = '_blank'
    aEl.href = repo.html_url
    reposEl.appendChild(aEl)
  })
}

function createErrorCard (msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div >
  `
  main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = input.value

  if (user) {
    getUser(user)

    input.value = ''
  }
})