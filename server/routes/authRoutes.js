const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/tempLogin', (req, res) => {
    req.user = 4;
    console.log('LOGGING ', req.user);
    res.redirect('/');
  });

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/current_user', (req, res) => {
    console.log('curr user is', req.user);
    res.send(req.user);
  });
};
