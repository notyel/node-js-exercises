const {
  getPokemonByIdCallback,
  getPokemonById,
  getPokemonByIdAsync,
} = require("../src/api/apiClient");

getPokemonByIdCallback(1, (pokemon) => {
  console.log({ pokemon });
});

getPokemonById(2).then((pokemon) => {
  console.log({ pokemon });
});

getPokemonByIdAsync(3).then((pokemon) => {
  console.log({ pokemon });
});
