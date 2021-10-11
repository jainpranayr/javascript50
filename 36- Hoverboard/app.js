const container = document.querySelector("#container")
const colors = [
	"salmon",
	"seagreen",
	"skyblue",
	"slateblue",
	"tomato",
	"violet",
	"yellow",
	"blue",
	"crimson",
	"darkorange",
	"darkred",
	"goldenrod",
	"orangered"
]
const SQUARES = 500
for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement("div")
	square.classList.add("square")
	square.addEventListener("mouseover", () => setClr(square))
	square.addEventListener("mouseout", () => removeClr(square))
	container.appendChild(square)
}

function setClr(elm) {
	const color = colors[Math.floor(Math.random() * colors.length)]
	elm.style.background = color
	elm.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeClr(elm) {
	elm.style.background = "#1d1d1d"
	elm.style.boxShadow = "0 0 2px #000"
}
