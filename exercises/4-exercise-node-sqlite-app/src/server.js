// src/server.js
const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta para obtener todos los estudiantes
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Ruta para crear un nuevo estudiante
app.post("/students", (req, res) => {
  const { name, age } = req.body;
  const stmt = db.prepare("INSERT INTO students (name, age) VALUES (?, ?)");
  stmt.run(name, age, function (err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

// Ruta para actualizar un estudiante
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const stmt = db.prepare("UPDATE students SET name = ?, age = ? WHERE id = ?");
  stmt.run(name, age, id, function (err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    if (this.changes === 0) {
      res.status(404).send("Estudiante no encontrado");
      return;
    }
    res.json({ message: "Estudiante actualizado con éxito" });
  });
  stmt.finalize();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
