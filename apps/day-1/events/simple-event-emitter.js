const EventEmitter = require('events');

const userObj = new EventEmitter();

userObj.addListener('userCreated', (user) => {
  console.log('User created event handled. user:', user);
});

userObj.addListener('userDeleted', () => {
  console.log('User deleted event handled.');
});

userObj.emit('userCreated', { id: 10, name: 'Ram' });
userObj.emit('userCreated', 'Shiv');

userObj.emit('userDeleted');