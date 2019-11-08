const jwt = require('jsonwebtoken');

const payload = {
  id: 1,
  name: 'Ram',
  isAdmin: true
};

const secretKey = 'abc123';
const token = jwt.sign(payload, secretKey);

console.log('JW Token:', token);

try {
  const result = jwt.verify(token, secretKey);
  // const result = jwt.verify(token, 'abc1234');
  console.log('Extracted payload:', result);
} catch (e) {
  return console.log('Invalid token.');
}
