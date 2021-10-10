const form = document.querySelector("#form")
const search = document.querySelector("#search")
const main = document.querySelector("#main")

const APIURL = "https://api.github.com/users/"

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username)
		createUserCard(data)
		getRepos(username)
	} catch (err) {
		if (err.response.status == 404) createErrorCard("Error! No User Found")
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + "/repos?sort=created")
		createReposPills(data)
	} catch (err) {
		createErrorCard("Problem fetching repos")
	}
}

function createUserCard(user) {
	const userID = user.name || user.login
	const userBio = user.bio ? `<p>${user.bio}</p>` : ""
	const html = `
    <div class="card">
        <div>
            <img
            src="${user.avatar_url}"
            class="avatar"
            />
        </div>
        <div class="user-info">
            <h2>${userID}</h2>
            ${userBio}
            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos">
               
            </div>
        </div>
    </div>
    `
	main.innerHTML = html
}

function createReposPills(repos) {
	const reposEl = document.querySelector("#repos")

	repos.slice(0, 10).forEach((repo) => {
		const repoEl = document.createElement("a")
		repoEl.classList.add("repo")
		repoEl.href = repo.html_url
		repoEl.target = "_blank"
		repoEl.innerText = repo.name

		reposEl.appendChild(repoEl)
	})
}

function createErrorCard(msg) {
	const html = `
    <div class='card'>
        <h3>${msg}</h3>
    </div>
    `
	main.innerHTML = html
}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const user = search.value
	if (user) {
		getUser(user)
		search.value = ""
	}
})
