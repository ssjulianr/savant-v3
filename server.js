const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'savant.czrh3mi43dg5.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'eComm',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/products', (req, res) => {
  const query = 'SELECT * FROM Products';
  connection.query(query, (err, data) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    return res.json(data);
  });
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'SELECT * FROM Products WHERE id = ?';
  connection.query(query, [productId], (err, data) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (data.length === 0) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    return res.json(data[0]);
  });
});

const port = 3009; // replace with your desired port number

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
