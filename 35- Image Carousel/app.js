const imgContainer = document.querySelector(".img-container")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")
const imgs = document.querySelectorAll("img")

let idx = 0
let interval = setInterval(run, 2000)

function run() {
	idx++
	changeImg()
}

function changeImg() {
	if (idx > imgs.length - 1) idx = 0
	else if (idx < 0) idx = imgs.length - 1
	imgContainer.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
	clearInterval(interval)
	interval = setInterval(run, 2000)
}

leftBtn.addEventListener("click", () => {
	idx--
	changeImg()
	resetInterval()
})

rightBtn.addEventListener("click", () => {
	idx++
	changeImg()
	resetInterval()
})

addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		idx--
		changeImg()
		resetInterval()
	}
	if (e.key === "ArrowRight") {
		idx++
		changeImg()
		resetInterval()
	}
})
