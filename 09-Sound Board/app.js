const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");

	btn.innerText = sound;
	btn.addEventListener("click", () => {
		pauseAudio();
		document.querySelector(`#${sound}`).play();
	});

	document.querySelector("#buttons").appendChild(btn);
});

function pauseAudio() {
	sounds.forEach((sound) => {
		const audio = document.querySelector(`#${sound}`);
		audio.pause();
		audio.currentTime = 0;
	});
}
