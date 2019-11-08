const express = require('express');
const User = require('../models/user');

const { users } = require('../data');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.status(500).json({ message: 'Get users failed!', error: e.message });
    }
  })
  .post(async (req, res) => {
    try {
      // validate incoming data
      // const user = await User.create({ ...req.body });
      const user = new User({ ...req.body });
      await user.save();
      res.status(201).send(user);
    } catch (e) {
      res.status(500).json({ message: 'Create user failed!', error: e.message });
    }
  });

router.route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
      res.status(404).json({ message: 'User not found!' });
      return;
    }

    res.json(user);
  })
  .put((req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    user.name = req.body.name;
    res.json(user);
  })
  .delete((req, res) => {
    const id = req.params.id;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index < 0) {
      return res.status(404).json({ message: 'User not found!' });
    }

    users.splice(index, 1);
    res.json({ message: `User with id '${id}' deleted successfully!` });
  });

module.exports = router;
