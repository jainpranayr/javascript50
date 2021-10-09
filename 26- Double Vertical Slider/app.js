const container = document.querySelector(".container")
const right = document.querySelector(".right")
const slidesLength = right.querySelectorAll("div").length
const left = document.querySelector(".left")
const upBtn = document.querySelector(".up-btn")
const downBtn = document.querySelector(".down-btn")

let active = 0
left.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener("click", () => changeSlide("up"))
downBtn.addEventListener("click", () => changeSlide("down"))

const changeSlide = (dir) => {
	const sliderHeight = container.clientHeight
	if (dir === "up") {
		active++
		if (active > slidesLength - 1) {
			active = 0
		}
	} else if (dir === "down") {
		active--
		if (active < 0) {
			active = slidesLength - 1
		}
	}

	right.style.transform = `translateY(-${active * sliderHeight}px)`
	left.style.transform = `translateY(${active * sliderHeight}px)`
}
