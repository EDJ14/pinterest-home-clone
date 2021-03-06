module.exports = connection => {
  const faker = require('faker');

  const userdata = [];
  const photodata = [];
  const postdata = [];
  for (let i = 0; i < 50; i++) {
    userdata.push([faker.internet.userName(), faker.date.past()]);
    photodata.push([
      `https://picsum.photos/id/${i}/${Math.ceil(
        30 * Math.random()
      )}00/${Math.ceil(60 * Math.random())}00`,
      faker.date.past()
    ]);
    postdata.push([
      faker.random.words() + faker.random.words(),
      i + 1,
      Math.floor(Math.random() * 9.9) + 1,
      Math.floor(Math.random() * 49.9) + 1
    ]);
  }

  const photoqclear = 'DELETE FROM photos';
  const userqclear = 'DELETE FROM users';
  const postqclear = 'DELETE FROM posts';

  const photoq = 'INSERT INTO photos (image_url, created_at) VALUES ?';
  const userq = 'INSERT INTO users (username, created_at) VALUES ?';
  const phototagq = 'INSERT INTO photo_tags (photo_id, tag_id) VALUES ?';
  const postq = 'INSERT INTO posts (title, photo_id, tag_id, user_id) VALUES ?';

  new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) FROM posts ', function(err, result) {
      console.log('ERROR', err);
      console.log('RESULT', result);
      resolve(result);
    });
  }).then(result => {
    const count = result[0]['COUNT(*)'];
    console.log('count', count);

    if (count < 100) {
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

      // select username, image_url from photos right join
      // (select username, photo_id from posts left join users on posts.user_id = users.id) as userphotoid
      // on photos.id = userphotoid.photo_id;
    }
  });
};
