const express = require('express');
const mysql = require('mysql');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./services/passport');

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: keys.sqlkey,
  database: 'server6'
});

require('./routes/postRoutes')(app, connection);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Awaiting orders'));
