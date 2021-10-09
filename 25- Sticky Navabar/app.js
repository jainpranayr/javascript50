const nav = document.querySelector(".nav")

addEventListener("scroll", fixNav)

function fixNav() {
	scrollY > nav.offsetHeight + 150
		? nav.classList.add("active")
		: nav.classList.remove("active")
}
