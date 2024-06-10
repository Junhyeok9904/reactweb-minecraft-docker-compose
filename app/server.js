const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'db',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydb'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});