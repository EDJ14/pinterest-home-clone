module.exports = (app, connection) => {
  app.get('/api/newpost/:username', (req, res) => {
    const person = { username: req.params.username };

    connection.query('INSERT INTO users SET ?', person, (err, results) => {
      if (err) {
        console.log(err.sqlMessage);
      }
    });
    res.sendStatus(200);
  });

  app.get('/api/categories', (req, res) => {
    const q = 'SELECT category_name FROM categories';

    connection.query(q, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};
