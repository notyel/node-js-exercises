# Ejercicio de Callbacks en Node.js

Este ejercicio tiene como objetivo mostrar el uso de callbacks en Node.js mediante la búsqueda de usuarios por ID.

## Descripción

El código proporcionado contiene una función `getUserById(id, callback)` que toma un ID de usuario y un callback como argumentos. La función busca un usuario en un arreglo de usuarios y devuelve el usuario si se encuentra o un mensaje de error si no se encuentra.

### Ejemplo de uso

```javascript
const { getUserById } = require('./src/user');

getUserById(1, (error, user) => {
  if (error) {
    return console.error(error);
  }
  console.log(user);
});

getUserById(3, (error, user) => {
  if (error) {
    return console.error(error);
  }
  console.log(user);
});
```

## Cómo Ejecutar el Programa en Node.js

Para ejecutar el programa en Node.js y buscar usuarios por ID, sigue estos pasos:

1. Abre una terminal o línea de comandos.

2. Navega hasta el directorio donde se encuentra tu proyecto.

3. Instala las dependencias del proyecto (si es necesario) ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Ejecuta el siguiente comando para iniciar el programa:

   ```bash
   npm start
   ```

5. El programa mostrará en la consola los resultados de la búsqueda de usuarios por ID.

¡Eso es todo! Ahora puedes utilizar el comando `npm start` para ejecutar el programa y ver cómo se manejan los callbacks en Node.js.

### Estructura del Proyecto

Para mantener una estructura organizada, asegurémonos de que todos los archivos estén en sus ubicaciones correctas:

```
1-exercise-callbacks/
├── package.json
├── README.md
└── src/
    ├── index.js
    └── user.js
```
