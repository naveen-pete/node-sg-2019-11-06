const express = require('express');
const morgan = require('morgan');

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('ECOM Server started. Listening on port ' + port);
});
