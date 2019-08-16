module.exports = (app, connection) => {
  app.get('/newpost/:username', (req, res) => {
    const person = { username: req.params.username };

    res.sendStatus(200);
  });

  app.get('/tags', (req, res) => {
    const q = 'SELECT tag_name FROM tags LIMIT 5';

    connection.query(q, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  app.get('/images/:num', (req, res) => {
    const q = 'SELECT image_url FROM photos WHERE id=' + req.params.num;
    connection.query(q, (err, results) => {
      if (err) throw err;

      res.send(results);
    });
  });

  app.get('/posts/:num/:offset', (req, res) => {
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

  app.post('/posts', (req, res) => {
    const post = { user_id: 50, title: 'this is a test post' };
    connection.query('INSERT INTO posts SET ?', post, (err, results) => {
      if (err) {
        console.log(err.sqlMessage);
      }
      console.log(results);
      retrievePostq =
        'SELECT title, user_id, photo_id, tag_id FROM posts WHERE id=' +
        results.insertId;
      connection.query(retrievePostq, (err, results2) => {
        console.log(results2);
        res.send(results2);
      });
    });
  });

  app.get('/deta*', (req, res) => {
    res.redirect('/');
  });
};
