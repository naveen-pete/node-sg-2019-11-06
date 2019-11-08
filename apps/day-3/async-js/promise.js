const { users, posts } = require('./data');

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.name === username);
      if (!user) {
        reject('User not found!');
        return;
      }

      resolve(user);
    }, 2000);
  });
}

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const postsForUser = posts.filter(p => p.userId === userId);
      if (!postsForUser) {
        reject('Posts for user not found!');
        return;
      }

      resolve(postsForUser);
    }, 2000);
  });
}

console.log('begin');

getUser('ram')
  .then((user) => {
    console.log('user:', user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('posts for user:', posts);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

console.log('end');
