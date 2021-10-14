const result = document.querySelector("#result")
const filter = document.querySelector("#filter")
const users = []

async function getUsers() {
	const res = await fetch("https://randomuser.me/api/?results=150")
	const { results } = await res.json()

	result.innerHTML = ""
	results.forEach((user) => {
		const userEl = document.createElement("li")

		users.push(userEl)
		userEl.innerHTML = `
            <img src = "${user.picture.large}" alt="${user.name.first}" />
            <div class = "user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>        
        `

		result.appendChild(userEl)
	})
}

function filterUsers(term) {
	users.forEach((user) => {
		if (user.innerText.toLowerCase().includes(term.toLowerCase())) {
			user.classList.remove("hide")
		} else {
			user.classList.add("hide")
		}
	})
}

getUsers()

filter.addEventListener("input", (e) => filterUsers(e.target.value))
