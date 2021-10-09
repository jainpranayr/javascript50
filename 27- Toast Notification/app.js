const btn = document.querySelector("#btn")
const toasts = document.querySelector("#toasts")

const colors = [
	"rebeccapurple",
	"limegreen",
	"crimson",
	"goldenrod",
	"slateblue"
]

btn.addEventListener("click", createNotification)

function createNotification() {
	const t = document.createElement("div")
	t.classList.add("toast")
	t.innerText = "Hello, World!"
	t.style.color = colors[Math.floor(Math.random() * colors.length)]
	toasts.appendChild(t)

	setTimeout(() => t.remove(), 5000)
}
