const API_KEY = "82ba8f6a732a0d169309955b52b4b231"

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&&query="`
const IMG_PATH = "https://image.tmdb.org/t/p/w500"

const form = document.querySelector("#form")
const search = document.querySelector("#search")
const main = document.querySelector("#main")

getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()
	showMovies(data.results)
}

function showMovies(movies) {
	main.innerHTML = ""
	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie
		const movieEl = document.createElement("div")
		movieEl.classList.add("movie")

		movieEl.innerHTML = `
			<img src=${IMG_PATH.concat(poster_path)} alt=${title}/>
			<div class="movie-info">
				<h3>${title}</h3>
				<span class="${getClassByRating(vote_average)}">${vote_average}</span>
			</div>
			<div class="overview">
				<h3>Overview</h3>
				${overview}
			</div>	
		`
		main.appendChild(movieEl)
	})
}

const getClassByRating = (vote) =>
	vote >= 9 ? "green" : vote >= 5 ? "orange" : "red"

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const searchQuery = search.value
	if (searchQuery && searchQuery !== "") {
		getMovies(SEARCH_URL.concat(searchQuery))
		search.value = ""
	} else {
		location.reload()
	}
})
