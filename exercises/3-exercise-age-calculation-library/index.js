const { calculateAge } = require("age-calculation-library");

const justine = {
  name: 'Justine',
  birthDate: "1987-06-28",
};

const age = calculateAge(justine.birthDate);

function isAdult(birthDate) {
  return calculateAge(birthDate) >= 18;
}

const isJustineAnAdult = isAdult(justine.birthDate);

console.log(`La edad de Justine es de: ${age}`);
console.log(`¿Justine es adulta? ${isJustineAnAdult ? 'sí' : 'no'}`);
