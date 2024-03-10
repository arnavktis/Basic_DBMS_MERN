const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "Assignment",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

connection.query("SELECT * from Department", (err, rows, fields) => {
  if (err) {
    console.error("Error executing query: " + err.stack);
    return;
  }
  console.log(rows);
});

connection.end((err) => {
  if (err) {
    console.error("Error ending connection: " + err.stack);
    return;
  }
  console.log("Connection ended.");
});
