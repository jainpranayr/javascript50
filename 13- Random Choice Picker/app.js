const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);
	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);

		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim !== "")
		.map((tag) => tag.trim());

	tagsEl.innerHTML = "";
	tags.forEach((element) => {
		const choice = document.createElement("span");
		choice.classList.add("tag");
		choice.innerText = element;
		tagsEl.appendChild(choice);
	});
}

function randomSelect() {
	const times = 30;
	const interval = setInterval(() => {
		const randomChoice = pickRandomChoice();
		toggleHL(randomChoice);
		setTimeout(() => {
			toggleHL(randomChoice);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomChoice = pickRandomChoice();
			toggleHL(randomChoice);
		}, 100);
	}, times * 100);
}

function pickRandomChoice() {
	const choices = document.querySelectorAll(".tag");
	return choices[Math.floor(Math.random() * choices.length)];
}

function toggleHL(choice) {
	choice.classList.toggle("hl");
}
