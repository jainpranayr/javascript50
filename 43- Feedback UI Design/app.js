const ratings = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector(".ratings-container")
const panel = document.querySelector("#panel")
const sendBtn = document.querySelector("#send")

let rating = "Satisfied"

ratingsContainer.addEventListener("click", (e) => {
	if (e.target.parentNode.classList.contains("rating")) {
		removeActive()
		e.target.parentNode.classList.add("active")
		rating = e.target.nextElementSibling.innerHTML

		console.log(rating)
	}
})

sendBtn.addEventListener("click", (e) => {
	panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${rating} </strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active")
	}
}
