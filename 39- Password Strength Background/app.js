const pass = document.querySelector("#password")
const bg = document.querySelector("#bg")

pass.addEventListener("keydown", (e) => {
	const pwd = e.target.value
	const len = pwd.length
	const blr = 20 - len * 2

	bg.style.filter = `blur(${blr}px)`
})
