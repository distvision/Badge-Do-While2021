const links = {
  github: 'distvision',
  // youtube: '',
  // facebook: '',
  instagram: 'uesr_fred_'
  // twitter: ''
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${links[social]}/`
  }
}

changeLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      loginName.textContent = data.login
      userAvatar.src = data.avatar_url
    })
}

getGithubProfileInfos()

const main = document.querySelector('.body')
const sec = document.querySelector('.sec')
const container = document.querySelector('.container')
const gitlink = document.querySelector('.git')

// const change = document.querySelector('.sec')
const toggle = document.querySelector('.toggle')
toggle.onclick = function () {
  sec.classList.toggle('light')
  main.classList.toggle('light')
  container.classList.toggle('light')
  gitlink.classList.toggle('light')
}
