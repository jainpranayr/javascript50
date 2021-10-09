const header = document.querySelector("#header")
const title = document.querySelector("#title")
const excerpt = document.querySelector("#excerpt")
const profile_img = document.querySelector("#profile_img")
const name = document.querySelector("#name")
const date = document.querySelector("#date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData() {
	header.innerHTML = '<img src="https://placedog.net/400/400/400"/>'
	title.innerHTML = "Lorem ipsum dolor sit amet"
	excerpt.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
	profile_img.innerHTML =
		'<img src="https://randomuser.me/api/portraits/men/45.jpg"/>'
	name.innerHTML = "Jane Doe"
	date.innerHTML = "Oct 08, 2021"

	animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
	animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}
