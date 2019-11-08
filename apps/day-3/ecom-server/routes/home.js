const express = require('express');

const { users } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h3>Hello! Welcome to ECOM Api using Express framework</h3>');
});

router.get('/users', (req, res) => {
  res.render('users', { users });
});

module.exports = router;
