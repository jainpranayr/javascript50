const html = document.querySelector("html")
const hrsEl = document.querySelector(".hrs")
const minsEl = document.querySelector(".mins")
const secsEl = document.querySelector(".secs")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggleEl = document.querySelector(".toggle")

localStorage.getItem("Mode") === "Dark" ? darkmode() : lightmode()

toggleEl.addEventListener("click", () =>
	html.classList.contains("dark") ? lightmode() : darkmode()
)

function darkmode() {
	html.classList.add("dark")
	toggleEl.innerHTML = "Light Mode"
	localStorage.setItem("Mode", "Dark")
}

function lightmode() {
	html.classList.remove("dark")
	toggleEl.innerHTML = "Dark Mode"
	localStorage.setItem("Mode", "Light")
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
]

function setTime() {
	const now = new Date()

	const month = now.getMonth()
	const day = now.getDay()
	const date = now.getDate()

	const secs = now.getSeconds()
	const secsDegrees = (secs / 60) * 360 + 90
	secsEl.style.transform = `translate(-50%, -100%) rotate(${secsDegrees}deg)`

	const mins = now.getMinutes()
	const minsDegrees = (mins / 60) * 360 + (secs / 60) * 6 + 90
	minsEl.style.transform = `translate(-50%, -100%) rotate(${minsDegrees}deg)`

	const hrs = now.getHours()
	const hrsDegrees = (hrs / 12) * 360 + (mins / 60) * 30 + 90
	hrsEl.style.transform = `translate(-50%, -100%) rotate(${hrsDegrees}deg)`

	timeEl.innerHTML = `${hrs}:${mins < 10 ? `0${mins}` : mins}`
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`
}

setInterval(() => {
	setTime()
}, 1000)
