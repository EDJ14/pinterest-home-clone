const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: keys.sqlkey,
  database: 'server6'
});

require('./routes/postRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Awaiting orders'));
