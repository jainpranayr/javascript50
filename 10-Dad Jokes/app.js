const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
	const res = await fetch("https://icanhazdadjoke.com/", {
		headers: {
			Accept: "application/json"
		}
	});

	const data = await res.json();
	jokeEl.innerHTML = data.joke;
}
