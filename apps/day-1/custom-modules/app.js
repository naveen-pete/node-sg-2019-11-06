
const { showUser, User } = require('./user');

showUser();

let obj = new User('Ram', 'ram@abc.com');
obj.show();

obj = new User('Amar', 'amar@abc.com');
obj.show();
