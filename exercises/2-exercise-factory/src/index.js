// Importar la función de cálculo de edad desde la biblioteca
const { calculateAge } = require("age-calculation-library");

// Fecha de nacimiento para calcular la edad
const fechaNacimiento = "1987-06-28";

// Calcular la edad basada en la fecha actual
const edad = calculateAge(fechaNacimiento);
console.log(`La edad es: ${edad}`);
