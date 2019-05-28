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

  app.get('/api/tags', (req, res) => {
    const q = 'SELECT tag_name FROM tags LIMIT 5';

    connection.query(q, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  app.get('/api/images/:num', (req, res) => {
    const q = 'SELECT image_url FROM photos WHERE id=' + req.params.num;
    connection.query(q, (err, results) => {
      if (err) throw err;

      res.send(results);
    });
  });

  app.get('/api/test', (req, res) => {
    const selectQ = 'SELECT * FROM users WHERE google_id=1234';
    const insertQ =
      'INSERT INTO users (google_id, username) VALUES (1234, "test8")';
    connection.query(insertQ, (err, results) => {
      if (err) throw err;
      /*const user = {
        id: results[0].id,
        google_id: results[0].google_id,
        username: results[0].username
      };*/
      console.log(results.insertId);
      res.send(results);
    });
  });
};
