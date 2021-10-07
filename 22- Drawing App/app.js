const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

const incr = document.querySelector("#incr")
const sizeEl = document.querySelector("#size")
const decr = document.querySelector("#decr")
const clr = document.querySelector("#color")
const clear = document.querySelector("#clear")

let x
let y
let size = 10
let isPressed = false
let color = "#000"

incr.addEventListener("click", () => {
	if (size < 50) {
		size += 10
		sizeEl.textContent = size
	}
})

decr.addEventListener("click", () => {
	if (size > 0) {
		size -= 10
		sizeEl.textContent = size
	}
})

clr.addEventListener("change", (e) => (color = e.target.value))

clear.addEventListener("click", () =>
	ctx.clearRect(0, 0, canvas.width, canvas.height)
)

canvas.addEventListener("mousedown", (e) => {
	isPressed = true
	x = e.offsetX
	y = e.offsetY
})

canvas.addEventListener("mouseup", (e) => {
	isPressed = false
	x = undefined
	y = undefined
})

canvas.addEventListener("mousemove", (e) => {
	if (isPressed) {
		const x2 = e.offsetX
		const y2 = e.offsetY

		drawCircle(x2, y2)
		drawLine(x, y, x2, y2)

		x = x2
		y = y2
	}
})

function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.strokeStyle = color
	ctx.lineWidth = size * 2
	ctx.stroke()
}
