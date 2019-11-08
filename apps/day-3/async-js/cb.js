const { users, posts } = require('./data');

const getUser = (username, cb) => {
  setTimeout(() => {
    const user = users.find(u => u.name === username);
    if (!user) {
      cb('User not found!');
      return;
    }

    cb(null, user);
  }, 2000);
}

const getPosts = (userId, cb) => {
  setTimeout(() => {
    const postsForUser = posts.filter(p => p.userId === userId);
    if (!postsForUser) {
      cb('Posts for user not found!');
      return;
    }

    cb(null, postsForUser);
  }, 2000);
}

console.log('begin');

getUser('ram', (err, user) => {
  if (err) {
    console.log('Error:', err);
    return;
  }

  console.log('user1:', user);

  getPosts(user.id, (err, result) => {
    if (err) {
      console.log('Error:', err);
      return;
    }

    console.log('Posts for user:', result);
  })
});

// getUser('hari1', (err, user) => {
//   if (err) {
//     console.log('Error:', err);
//     return;
//   }
//   console.log('user2:', user);
// });

console.log('end');
