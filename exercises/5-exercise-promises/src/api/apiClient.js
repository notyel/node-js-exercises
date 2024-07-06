// Método que obtiene un Pokémon por ID utilizando callbacks
const getPokemonByIdCallback = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Realiza la solicitud HTTP
  fetch(url).then((response) => {
    // Parsea la respuesta como JSON
    response.json().then((pokemon) => {
      // Llama al callback con el nombre del Pokémon
      callback(pokemon.name);
    });
  });
};

// Método que obtiene un Pokémon por ID utilizando promesas
const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Retorna una promesa que resuelve con el nombre del Pokémon
  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name);
};

// Método que obtiene un Pokémon por ID utilizando async/await
const getPokemonByIdAsync = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Realiza la solicitud HTTP y espera la respuesta
  const response = await fetch(url);

  // Parsea la respuesta como JSON y espera la promesa
  const pokemon = await response.json();

  // Retorna el nombre del Pokémon
  return pokemon.name;
};

// Exporta los métodos para ser utilizados en otros archivos
module.exports = {
  getPokemonById,
  getPokemonByIdCallback,
  getPokemonByIdAsync,
};
