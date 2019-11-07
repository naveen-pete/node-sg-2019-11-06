const express = require('express');

const { products } = require('../data');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json(products);
  })
  .post((req, res) => {
    const newProduct = { ...req.body, id: Date.now() };
    products.push(newProduct);
    res.status(201).send(newProduct);
  });

router.route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    console.log('query string:', req.query);

    res.json(product);
  })
  .put((req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    product.name = req.body.name;
    res.json(product);
  })
  .delete((req, res) => {
    const id = req.params.id;
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index < 0) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    products.splice(index, 1);
    res.json({ message: `Product with id '${id}' deleted successfully!` });
  });

module.exports = router;
