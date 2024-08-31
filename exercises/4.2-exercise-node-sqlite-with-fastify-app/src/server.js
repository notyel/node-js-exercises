// src/server.js
const fastify = require("fastify")({ logger: true });
const db = require("./database");

// Ruta para obtener todos los estudiantes
fastify.get("/students", (request, reply) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      reply.status(500).send(err.message);
      return;
    }
    reply.send(rows);
  });
});

// Ruta para crear un nuevo estudiante
fastify.post("/students", (request, reply) => {
  const { name, age } = request.body;
  const stmt = db.prepare("INSERT INTO students (name, age) VALUES (?, ?)");
  stmt.run(name, age, function (err) {
    if (err) {
      reply.status(500).send(err.message);
      return;
    }
    reply.send({ id: this.lastID });
  });
  stmt.finalize();
});

// Iniciar el servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server is running on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
