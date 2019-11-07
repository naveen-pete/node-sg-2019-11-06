const express = require('express');
const morgan = require('morgan');
const { users, products } = require('./data');

const app = express();

const log = (req, res, next) => {
  console.log(`Request received: Url: ${req.url}, Method: ${req.method}`);
  next();
};

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h3>Hello! Welcome to ECOM Api using Express framework</h3>');
});

app.route('/api/users')
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const newUser = { ...req.body, id: Date.now() };
    users.push(newUser);
    res.status(201).send(newUser);
  });

app.route('/api/users/:id')
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

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  res.status(201).send('Post Product');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('ECOM Server started. Listening on port ' + port);
});
