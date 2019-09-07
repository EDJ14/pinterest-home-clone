module.exports = connection => {
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
    photodata.push([
      `https://picsum.photos/id/${i}/${Math.ceil(
        10 * Math.random()
      )}00/${Math.ceil(10 * Math.random())}00`,
      faker.date.past()
    ]);
    postdata.push([
      faker.random.words() + faker.random.words(),
      i + 1,
      Math.floor(Math.random() * 9.9) + 1,
      Math.floor(Math.random() * 49.9) + 1
    ]);
  }

  /*const datatags = [];
  while (datatags.length < 50) {
    let num1 = Math.floor(Math.random() * 49.9) + 1;
    let num2 = Math.floor(Math.random() * 9.9) + 1;
    let pair = [num1, num2];

    if (!subArr(datatags, pair)) {
      datatags.push(pair);
    } else {
      continue;
    }
  }
*/
  const photoqclear = 'DELETE FROM photos';
  const photoq = 'INSERT INTO photos (image_url, created_at) VALUES ?';
  const userq = 'INSERT INTO users (username, created_at) VALUES ?';
  const phototagq = 'INSERT INTO photo_tags (photo_id, tag_id) VALUES ?';
  const postq = 'INSERT INTO posts (title, photo_id, tag_id, user_id) VALUES ?';

  connection.query(photoqclear, function(err, result) {
    console.log(err);
    console.log(result);
  });

  connection.query(photoq, [photodata], function(err, result) {
    console.log(err);
    console.log(result);
  });

  connection.query(userq, [userdata], function(err, result) {
    console.log(err);
    console.log(result);
  });

  /*connection.query(phototagq, [datatags], function(err, result) {
    console.log(err);
    console.log(result);
  });*/

  connection.query(postq, [postdata], function(err, result) {
    console.log(err);
    console.log(result);
  });

  // select username, image_url from photos right join
  // (select username, photo_id from posts left join users on posts.user_id = users.id) as userphotoid
  // on photos.id = userphotoid.photo_id;
};
