// src/initDB.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./students.db");

db.serialize(() => {
  // Crear la tabla students con la columna birth_date
  db.run(
    "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, birth_date TEXT)"
  );

  // Insertar algunos estudiantes de ejemplo con birth_date
  const stmtStudents = db.prepare("INSERT INTO students (name, birth_date) VALUES (?, ?)");
  stmtStudents.run("Alice", "2003-05-15");
  stmtStudents.run("Bob", "2002-07-22");
  stmtStudents.run("Charlie", "2001-12-01");
  stmtStudents.finalize();

  // Crear la tabla subjects con la columna id
  db.run(
    "CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY, name TEXT, description TEXT)"
  );

  // Insertar algunos registros de ejemplo en subjects
  const stmtSubjects = db.prepare("INSERT INTO subjects (name, description) VALUES (?, ?)");
  stmtSubjects.run("Math", "Basic Mathematics");
  stmtSubjects.run("Science", "Basic Science");
  stmtSubjects.run("History", "World History");
  stmtSubjects.run("Literature", "World Literature");
  stmtSubjects.run("Physics", "Basic Physics");
  stmtSubjects.run("Art", "Introduction to Art");
  stmtSubjects.run("Computer Science", "Introduction to Programming");
  stmtSubjects.finalize();

  // Crear la tabla intermedia student_subjects
  db.run(
    "CREATE TABLE IF NOT EXISTS student_subjects (student_id INTEGER, subject_id INTEGER, " +
    "FOREIGN KEY(student_id) REFERENCES students(id), " +
    "FOREIGN KEY(subject_id) REFERENCES subjects(id))"
  );

  // Insertar algunos registros de ejemplo en student_subjects
  const stmtStudentSubjects = db.prepare("INSERT INTO student_subjects (student_id, subject_id) VALUES (?, ?)");
  stmtStudentSubjects.run(1, 1); // Alice - Math
  stmtStudentSubjects.run(1, 2); // Alice - Science
  stmtStudentSubjects.run(2, 1); // Bob - Math
  stmtStudentSubjects.run(3, 3); // Charlie - History
  stmtStudentSubjects.finalize();
});

db.close();

