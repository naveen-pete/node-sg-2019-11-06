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
      if (postsForUser.length === 0) {
        reject('Posts for user not found!');
        return;
      }

      resolve(postsForUser);
    }, 2000);
  });
}

const getUserAndPosts = async () => {

  try {
    const user = await getUser('ram');
    const postsForUser = await getPosts(10);
    console.log('user:', user);
    console.log('posts for user:', postsForUser);
  } catch (e) {
    console.log('Error:', e);
  }

}

console.log('begin');

getUserAndPosts();

console.log('end');
