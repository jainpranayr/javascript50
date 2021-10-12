const container = document.querySelector("#container")

const count = 150

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5"
}

const types = Object.keys(colors)

const fetchPokemons = async () => {
    for (let i = 1; i <= count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {

    const pokemonEl = document.createElement("div")
    pokemonEl.classList.add("pokemon")

    const temp = pokemon.types.map(type => type.type.name)
    const type = types.find(type => temp.indexOf(type) > -1)

    const html = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
    </div>
    <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${pokemon.name.toUpperCase()}</h3>
        <small class="type"><span>${type}</span></small>
    </div>   
    `

    pokemonEl.innerHTML = html
    pokemonEl.style.background = colors[type]
    container.appendChild(pokemonEl)
}

fetchPokemons()

