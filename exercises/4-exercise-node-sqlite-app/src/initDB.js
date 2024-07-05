// src/initDB.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./students.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
  );

  // Insertar algunos estudiantes de ejemplo
  const stmt = db.prepare("INSERT INTO students (name, age) VALUES (?, ?)");
  stmt.run("Alice", 21);
  stmt.run("Bob", 22);
  stmt.run("Charlie", 23);
  stmt.finalize();
});

db.close();
