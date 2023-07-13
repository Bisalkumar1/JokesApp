const jokel = document.getElementById('joke')

const jokebtn = document.getElementById('btn')

jokebtn.addEventListener('click', generatejoke)

generatejoke()

// USING ASYNC/AWAIT
async function generatejoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokel.innerHTML = data.joke
}
