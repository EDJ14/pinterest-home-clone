module.exports = connection => {
  connection.query(
    `CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    google_id VARCHAR(50) UNIQUE,
    username VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );

  connection.query(
    `CREATE TABLE photos (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      image_url VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
  );`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );

  connection.query(
    `CREATE TABLE tags (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      tag_name VARCHAR(255) UNIQUE,
      created_at TIMESTAMP DEFAULT NOW()
    );`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );

  connection.query(
    `CREATE TABLE photo_tags (
      photo_id INTEGER NOT NULL,
      tag_id INTEGER NOT NULL,
      FOREIGN KEY(photo_id) REFERENCES photos(id),
      FOREIGN KEY(tag_id) REFERENCES tags(id),
      PRIMARY KEY(photo_id, tag_id)
  );`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );

  connection.query(
    `CREATE TABLE posts (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      photo_id INTEGER,
      tag_id INTEGER, 
      user_id INTEGER NOT NULL,
      FOREIGN KEY(photo_id) REFERENCES photos(id),
      FOREIGN KEY(tag_id) REFERENCES tags(id),
      FOREIGN KEY(user_id) REFERENCES users(id)
  );`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );

  connection.query(
    `CREATE TABLE liked_posts (
      user_id INTEGER NOT NULL,
      post_id INTEGER NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(post_id) REFERENCES posts(id),
      PRIMARY KEY(user_id, post_id)
  );`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );

  connection.query(
    `INSERT INTO tags (tag_name) VALUES ('nature'), ('politics'), ('movies'), ('battlefield'), ('books'), ('history'), ('sports'), ('science'), ('travel'), ('philosophy');`,
    function(err, result) {
      console.log(err);
      console.log(result);
    }
  );
};
