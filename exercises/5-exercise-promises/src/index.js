// Importa las funciones necesarias desde el archivo apiClient ubicado en ../src/api/apiClient
const {
  getPokemonByIdCallback,
  getPokemonById,
  getPokemonByIdAsync,
} = require("../src/api/apiClient");

// Usa la función getPokemonByIdCallback para obtener un Pokémon por su ID usando un callback
// La función toma el ID del Pokémon y una función callback que maneja el resultado
getPokemonByIdCallback(1, (pokemon) => {
  // Imprime el Pokémon obtenido en la consola
  console.log({ pokemon });
});

// Usa la función getPokemonById para obtener un Pokémon por su ID usando promesas
// La función retorna una promesa que se resuelve con el Pokémon correspondiente
getPokemonById(2).then((pokemon) => {
  // Imprime el Pokémon obtenido en la consola
  console.log({ pokemon });
});

// Usa la función getPokemonByIdAsync para obtener un Pokémon por su ID usando async/await
// La función retorna una promesa que se resuelve con el Pokémon correspondiente
getPokemonByIdAsync(3).then((pokemon) => {
  // Imprime el Pokémon obtenido en la consola
  console.log({ pokemon });
});
