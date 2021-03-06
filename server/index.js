const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// mySQL Client Setup
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: keys.mysqlHost, //'mysql'
  user: keys.mysqlUser,
  password: keys.mysqlPassword,
  database: keys.mysqlDatabase, // pinterest
  port: keys.mysqlPort // 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

require('./config/populateDB')(connection);
require('./services/passport')(connection);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/postRoutes')(app, connection);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Awaiting orders'));
