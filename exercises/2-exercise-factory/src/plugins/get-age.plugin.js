const { calculateAge } = require("age-calculation-library");

const getAge = (birthdate) => {
  if (!birthdate) return new Error("birthdate is required");

  return calculateAge(birthdate);
};

module.exports = {
  getAge,
};
