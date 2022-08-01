const userListEl = document.querySelector('.user-list');
const searchEl = document.querySelector('#filter')

const userListItems = []

searchEl.addEventListener('input', (e) => filterUserList(e.target.value))

getUserListData()

async function getUserListData () {
  const res = await fetch('https://randomuser.me/api?results=50')
  const data = await res.json()
  renderUserList(data.results)
}

function renderUserList (data) {
  data.forEach(item => {
    const user = document.createElement('li')
    user.className = 'user'

    const name = `${item.name.first} ${item.name.last}`
    
    user.innerHTML = `
      <li class="user">
        <img class="avatar" src="${item.picture.medium}" alt="${name}">
        <div class="user-info">
          <h4 class="name">${name}</h4>
          <p class="location">${item.location.country}, ${item.location.state}</p>
        </div>
      </li>
    `

    userListItems.push(user)
    userListEl.appendChild(user)
  })
}

function filterUserList (filterText) {
  console.log('input');
  userListItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(filterText.toLowerCase())) {
      item.classList.remove('hidden')
    } else {
      item.classList.add('hidden')
    }
  })
}