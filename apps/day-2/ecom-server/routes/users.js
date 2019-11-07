const express = require('express');

const { users } = require('../data');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const newUser = { ...req.body, id: Date.now() };
    users.push(newUser);
    res.status(201).send(newUser);
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
