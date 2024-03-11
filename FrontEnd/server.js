const express = require('express');
const app = express();
const fs = require('fs');
const mysql = require('mysql2');

const PORT = 8080; // You can change this port if needed

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'Assignment'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Function to get data by ID from MySQL
function getAllDepartments(callback) {
    connection.query('SELECT * FROM department', (error, results, fields) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
        callback(error, null);
        return;
      }
      callback(null, results); // Return all departments
    });
  }

  app.use(express.static('Public'));

  app.get('/', (req, res) => {
    fs.readFile('index.html', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  });

  app.get('/data', (req, res) => {
    getAllDepartments((error, data) => {
      if (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
      if (data.length > 0) {
        res.json(data);
        console.log(data);
      } else {
        res.status(404).send('No data found');
      }
    });
  });


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});