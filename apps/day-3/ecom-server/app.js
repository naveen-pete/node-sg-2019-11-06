const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const homeRouter = require('./routes/home');

const log = require('./middleware/log');

const app = express();

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', `${__dirname}\\my-views`);

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/', homeRouter);

mongoose.connect(
  'mongodb://localhost:27017/product-db',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => {
    console.log('Connected to Product DB successfully.');

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('ECOM Server started. Listening on port ' + port);
    });

  })
  .catch((error) => {
    console.log('Error while connecting to database.');
    console.log('Error:', error);
  });

