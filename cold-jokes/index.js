const content = document.querySelector('.content')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  // fetch(`http://v.juhe.cn/joke/content/list.php`, {
  fetch(`https://icanhazdadjoke.com/`, {
    // method: 'POST',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    // body: `sort=desc&page=&pagesize=1&time=${String(new Date().getTime()).slice(0, 10)}&key=62affbb2c4636494b5d73e0bf52823f3`,
    mode: 'cors'
  }).then((res) => res.json())
    .then(data => {
      console.log(data);
      content.innerText = data.joke
  })
})

