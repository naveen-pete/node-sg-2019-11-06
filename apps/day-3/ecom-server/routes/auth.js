const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const User = require('../models/user');
const { secretKey } = require('../data');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Wrong email or password.' });
    }

    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(400).json({ message: 'Wrong email or password.' });
    }

    const payload = _.pick(user, ['_id', 'name', 'isAdmin']);
    const token = jwt.sign(payload, secretKey, { expiresIn: 6000 });

    res.json({ message: 'Login successful', token });
  } catch (e) {
    res.status(500).json({ message: 'Login server error!', error: e.message });
  }
});

module.exports = router;
