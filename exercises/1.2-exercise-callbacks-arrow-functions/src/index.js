// Importamos la función getUserById desde el módulo user.js
const { getUserById } = require("./user");

// Llamada a getUserById con el ID 1
getUserById(1, (error, user) => {
  if (error) {
    // Si hay un error (usuario no encontrado), lanzamos una excepción
    throw new Error(error);
  }

  // Si no hay error, imprimimos la información del usuario en la consola
  console.log(user);
});

// Llamada a getUserById con el ID 3
getUserById(3, (error, user) => {
  if (error) {
    // Si hay un error (usuario no encontrado), lanzamos una excepción
    throw new Error(error);
  }

  // Si no hay error, imprimimos la información del usuario en la consola
  console.log(user);
});
