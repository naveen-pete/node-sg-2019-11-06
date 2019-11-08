const jwt = require('jsonwebtoken');
const { secretKey } = require('../data');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token is missing!' });
  }

  try {
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = auth;