const User = require('./user');

const userObj = new User();

userObj.addListener('userCreated', (user) => {
  console.log('New user created successfully. user:', user);
});

userObj.addListener('userDeleted', (message) => {
  console.log('User deleted successfully.');
  console.log('Message:', message);
});

userObj.create('Hari');
userObj.delete(10);
