module.exports = app => {
  app.get('/api/newpost', (req, res) => {
    console.log('pinged new user route');

    res.sendStatus(200);
  });
};
