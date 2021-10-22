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
