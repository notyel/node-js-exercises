# Ejercicio de Cálculo de Edad en Node.js

Este ejercicio tiene como objetivo mostrar el uso de una librería de cálculo de edad en Node.js.

## Descripción

El código proporcionado contiene una función `calculateAge(birthDate)` que toma una fecha de nacimiento y devuelve la edad calculada a partir de esa fecha. Además, incluye una función `isAdult(birthDate)` que determina si una persona es mayor de edad (18 años o más) basándose en su fecha de nacimiento.

### Ejemplo de uso

```javascript
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
```

## Cómo Ejecutar el Programa en Node.js

Para ejecutar el programa en Node.js y calcular la edad de una persona, sigue estos pasos:

1. Abre una terminal o línea de comandos.

2. Navega hasta el directorio donde se encuentra tu proyecto.

3. Instala las dependencias del proyecto (si es necesario) ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Ejecuta el siguiente comando para iniciar el programa:

   ```bash
   node index.js
   ```

5. El programa mostrará en la consola la edad calculada y si la persona es mayor de edad.

¡Eso es todo! Ahora puedes utilizar el comando `node index.js` para ejecutar el programa y ver cómo se calcula la edad y se determina si una persona es mayor de edad en Node.js.

### Estructura del Proyecto

Para mantener una estructura organizada, asegurémonos de que todos los archivos estén en sus ubicaciones correctas:

```
3-exercise-age-calculation-library/
├── .gitignore
├── README.md
├── index.js
├── package-lock.json
├── package.json
```

---

Esta documentación debería proporcionar una guía clara sobre cómo utilizar y ejecutar el proyecto `3-exercise-age-calculation-library`.
