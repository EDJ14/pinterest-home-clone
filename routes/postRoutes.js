module.exports = (app, connection) => {
  app.get('/api/newpost/:username', (req, res) => {
    const person = { username: req.params.username };

    /*connection.query('INSERT INTO users SET ?', person, (err, results) => {
      if (err) {
        console.log(err.sqlMessage);
      }
    });*/
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

  app.get('/api/posts/:num/:offset', (req, res) => {
    console.log(req.params.num);
    const q = `select username, image_url from photos right join 
              (select username, photo_id, tag_id from posts left join users on posts.user_id = users.id) 
              as userphotoid on photos.id = userphotoid.photo_id LIMIT ${
                req.params.num
              } OFFSET ${req.params.offset}`;
    connection.query(q, (err, results) => {
      res.send(results);
    });
  });
};
