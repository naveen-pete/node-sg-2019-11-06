const bcrypt = require('bcrypt');

const password = 'abc123';
let hash = bcrypt.hashSync(password, 10);

console.log(bcrypt.compareSync(password, hash));
console.log(bcrypt.compareSync('abc12', hash));
