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
    const q = `SELECT username, image_url FROM photos RIGHT JOIN 
              (SELECT username, photo_id, tag_id FROM posts LEFT JOIN users ON posts.user_id = users.id) 
              AS userphotoid ON photos.id = userphotoid.photo_id LIMIT ${
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

  app.post('/savepost', (req, res) => {
    console.log(req.body);
    console.log('saving POST');

    const faker = require('faker');

    /*
const uniquePics = [];
let i = 0;
while (i < 50) {
  let pic = faker.image.image();
  if (!uniquePics.includes(pic)) {
    uniquePics.push(pic);
    console.log('added pic # ', i);
    i++;
  } else {
    continue;
  }
}
*/

    const userdata = [];
    const photodata = [];
    const postdata = [];
    for (let i = 0; i < 50; i++) {
      userdata.push([faker.internet.userName(), faker.date.past()]);
      photodata.push([faker.image.image(), faker.date.past()]);
      postdata.push([
        faker.random.words() + faker.random.words(),
        i + 1,
        Math.floor(Math.random() * 9.9) + 1,
        Math.floor(Math.random() * 49.9) + 1
      ]);
    }

    const photoq = 'INSERT INTO photos (image_url, created_at) VALUES ?';
    const userq = 'INSERT INTO users (username, created_at) VALUES ?';
    const postq =
      'INSERT INTO posts (title, photo_id, tag_id, user_id) VALUES ?';

    connection.query(photoq, [photodata], function(err, result) {
      console.log(err);
      console.log(result);
    });

    connection.query(userq, [userdata], function(err, result) {
      console.log(err);
      console.log(result);
    });

    connection.query(postq, [postdata], function(err, result) {
      console.log(err);
      console.log(result);
    });
  });
};
