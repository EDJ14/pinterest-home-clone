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
  host: keys.mysqlHost, //'mysql',
  user: keys.mysqlUser, //'root',
  password: keys.mysqlPassword,
  database: keys.mysqlDatabase, //'serverX',
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

/* Redis Client Setup
const redis = require('redis');
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();
*/

require('./routes/postRoutes')(app, connection);
require('./routes/authRoutes')(app);

/* Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.mysqlUser,
  host: keys.mysqlHost,
  database: keys.mysqlDatabase,
  password: keys.mysqlPassword,
  port: keys.mysqlPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Awaiting orders'));
