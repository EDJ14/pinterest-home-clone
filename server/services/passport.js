const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

module.exports = connection => {
  passport.serializeUser((user, done) => {
    console.log('serialize');
    done(null, user.id);
    return;
  });

  passport.deserializeUser((id, done) => {
    console.log('deserialize', id);
    const q = 'SELECT * FROM users WHERE id=' + id;
    connection.query(q, (err, results) => {
      console.log('results', results);
      if (results.length > 0) {
        const user = {
          id: results[0].id,
          google_id: results[0].google_id,
          username: results[0].username
        };
        done(null, user);
        return;
      }
      const user = { id: null, google_id: null, username: null };
      done(null, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL:
          /*'http://pinterestv8-env.mnfpmmpm5f.us-west-2.elasticbeanstalk.com/api/auth/google/callback'*/

          'http://192.168.99.101.nip.io:3050/api/auth/google/callback',
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('google strat');
        const q = 'SELECT * FROM users WHERE google_id=' + profile.id;
        connection.query(q, (err, results) => {
          // check if any results, ie any users in database
          if (results.length > 0) {
            const existingUser = {
              id: results[0].id,
              google_id: results[0].google_id
            };
            return done(null, existingUser);
          }

          console.log('new user', typeof profile.displayName);
          const newUserQ = `INSERT INTO users (google_id, username) VALUES (${profile.id}, '${profile.displayName}');`;
          // if no users, insert with new id
          connection.query(newUserQ, (err, results2) => {
            console.log('ERR', err);
            console.log('results2', results2);
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
};
