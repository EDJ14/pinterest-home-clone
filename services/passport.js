const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql');
const keys = require('../config/keys');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: keys.sqlkey,
  database: 'server6'
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const q = 'SELECT * FROM users WHERE id=' + id;
  connection.query(q, (err, results) => {
    const user = {
      id: results[0].id,
      google_id: results[0].google_id,
      username: results[0].username //115660807052933830156
    };

    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const q = 'SELECT * FROM users WHERE google_id=' + profile.id;
      connection.query(q, (err, results) => {
        if (results.length) {
          // check if any results, ie any users in database
          const existingUser = {
            id: results[0].id,
            google_id: results[0].google_id
          };
          return done(null, existingUser);
        }
        newUserQ = `INSERT INTO users (google_id) VALUES (${profile.id})`; // if no users, insert with new id
        connection.query(newUserQ, (err, results2) => {
          const getNewUserQ =
            'SELECT * FROM users WHERE id=' + results2.insertId; // after inserting, get that user
          connection.query(getNewUserQ, (err, results3) => {
            const newUser = {
              id: results3[0].id,
              google_id: results3[0].google_id
            };
            done(null, newUser);
          });
        });
      });
    }
  )
);
