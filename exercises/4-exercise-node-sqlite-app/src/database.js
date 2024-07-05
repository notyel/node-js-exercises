// src/database.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./students.db");

module.exports = db;
