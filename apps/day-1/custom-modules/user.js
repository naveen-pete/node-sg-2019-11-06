let name = 'Hari';
let email = 'hari@abc.com';

function showUser() {
  console.log('showUser() invoked..');
  console.log('name:', name);
  console.log('inside block email:', email);
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  show() {
    console.log('name:', this.name);
    console.log('email:', this.email);
  }
}

module.exports = {
  name,
  email,
  showUser,
  User
};