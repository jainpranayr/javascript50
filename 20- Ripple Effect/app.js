const buttons = document.querySelectorAll(".ripple")

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const x = e.clientX
		const y = e.clientY
		const buttonTop = e.target.offsetTop
		const buttonLeft = e.target.offsetLeft

		const X = x - buttonLeft
		const Y = y - buttonTop
		console.log(X, Y)

		const circle = document.createElement("span")
		circle.classList.add("circle")
		circle.style.top = Y + "px"
		circle.style.left = X + "px"
		this.appendChild(circle)
		setTimeout(() => circle.remove(), 500)
	})
})
