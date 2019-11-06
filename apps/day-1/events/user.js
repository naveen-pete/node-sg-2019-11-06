const EventEmitter = require('events');

class User extends EventEmitter {
  create(name) {
    this.emit('userCreated', { id: Date.now(), name: name.toUpperCase() });
  }

  delete(id) {
    this.emit('userDeleted', 'User with user id ' + id + ' deleted successfully.');
  }
}

module.exports = User;
