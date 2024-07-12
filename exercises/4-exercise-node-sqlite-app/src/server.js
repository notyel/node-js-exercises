const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");
const cors = require("cors");
const { calculateAge } = require("age-calculation-library");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ruta para obtener todos los estudiantes
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    // Calcular la edad de cada estudiante
    const studentsWithAge = rows.map(student => {
      const age = calculateAge(student.birth_date);
      return { ...student, age };
    });

    res.json(studentsWithAge);
  });
});

// Ruta para crear un nuevo estudiante
app.post("/students", (req, res) => {
  const { name, birth_date } = req.body;
  const stmt = db.prepare("INSERT INTO students (name, birth_date) VALUES (?, ?)");
  stmt.run(name, birth_date, function (err) {
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
  const { name, birth_date } = req.body;

  const stmt = db.prepare("UPDATE students SET name = ?, birth_date = ? WHERE id = ?");
  stmt.run(name, birth_date, id, function (err) {
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
