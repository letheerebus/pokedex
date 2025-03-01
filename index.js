const poke_container = document.getElementById("poke_container");
const search = document.getElementById("search");
const form = document.getElementById("form");

const url = "https://pokeapi.co/api/v2/pokemon";
const pokemons_number = 151;

let pokemons = [];

// Function to fetch all Pokemon
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getAllPokemon(i);
    }
    displayPokemons();
};

// Function to display fetched Pokemon
const displayPokemons = () => {
    poke_container.innerHTML = ""; // Clear existing content
    pokemons.forEach((pokemon) => createPokemonCard(pokemon));
};

// Function to remove all Pokemon cards from the container
const removePokemon = () => {
    poke_container.innerHTML = ""; // Simplest way to remove all children
};

// Function to get a specific Pokemon by ID
const getAllPokemon = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`);
        const pokemon = await res.json();
        pokemons = [...pokemons, pokemon];
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
    }
};

// Function to get a Pokemon by search term
const getPokemon = async (searchTerm) => {
    const searchPokemons = pokemons.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    removePokemon(); // Clear previous results
    searchPokemons.forEach((pokemon) => createPokemonCard(pokemon));
};

// Function to create a Pokemon card (updated)
function createPokemonCard(pokemon) {
    const pokemonEL = document.createElement("div");
    pokemonEL.classList.add("pokemon");

    const poke_types = pokemon.types.map((el) => el.type.name).slice(0, 1);
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Corrected capitalization
    const poke_stat = pokemon.stats.map((el) => el.stat.name);
    const stats = poke_stat.slice(0, 3);
    const base_value = pokemon.stats.map((el) => el.base_stat);
    const base_stat = base_value.slice(0, 3);

    const stat = stats
        .map((stat) => `<li>${stat}</li>`)
        .join("");
    const base = base_stat
        .map((base) => `<li>${base}</li>`)
        .join("");

    // Corrected Image URL
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const pokeInnerHTML = `
    <div class="img-container">
        <img src="${imgUrl}" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
        <h3 class="name">${name}</h3>
        <small class="type"><span>${poke_types}</span></small>
    </div>
    <div class="stats">
        <h2>Stats</h2>
        <div class="flex">
            <ul>${stat}</ul>
            <ul>${base}</ul>
        </div>
    </div>`;

    pokemonEL.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEL);
}

// Event listener for the search form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value.trim(); // Use .value to get the input value
    if (searchTerm) {
        getPokemon(searchTerm);
        search.value = ""; // Clear the search input
    } else {
        pokemons = [];
        removePokemon();
        fetchPokemons();
    }
});

// Initial fetch of Pokemon
fetchPokemons();
