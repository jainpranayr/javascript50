const dgg = document.querySelector(".doggo")
const countEl = document.querySelector("#count")
let count = 0

// let t = 0
// dgg.addEventListener("click", (e) => {
// 	if (t === 0) {
// 		t = new Date().getTime()
// 	} else {
// 		if (new Date().getTime() - t > 800) {
// 			createHeart(e)
// 			t = 0
// 		} else {
// 			t = new Date().getTime()
// 		}
// 	}
// })

dgg.addEventListener("dblclick", (e) => createHeart(e))

function createHeart(e) {
	const heart = document.createElement("i")
	heart.classList.add("fas")
	heart.classList.add("fa-heart")

	const x = e.clientX
	const y = e.clientY
	const l = e.target.offsetLeft
	const t = e.target.offsetTop

	const X = x - l
	const Y = y - t

	heart.style.left = `${X}px`
	heart.style.top = `${Y}px`

	dgg.appendChild(heart)
	countEl.innerHTML = ++count

	setTimeout(() => heart.remove, 1000)
}
