const express = require('express');
const _ = require('lodash');
const Product = require('../models/product');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      // const products = await Product.find().select('_id name description price category');
      // const products = await Product.find().select({ _id: true, name: true, description: true, price: true, category: true });
      // const products = await Product.find().select({ __v: false });
      const products = await Product.find().select('-__v');
      res.send(products);
    } catch (e) {
      res.status(500).send({ message: 'Get products failed.', error: e.message });
    }
  })
  .post(auth, async (req, res) => {
    try {
      let product = await Product.create({ ...req.body });
      product = _.pick(product, ['_id', 'name', 'description', 'price', 'category']);
      res.status(201).send(product);
    }
    catch (e) {
      res.status(500).send({ message: 'Create product failed.', error: e.message });
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findById(id).select('-__v');
      if (!product) {
        return res.status(404).send({ message: 'Product not found!' });
      }

      res.send(product);
    } catch (e) {
      res.status(500).send({ message: 'Get product failed.', error: e.message });
    }
  })
  .put(auth, async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByIdAndUpdate(id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      }, { new: true });

      if (!product) {
        return res.status(404).send({ message: 'Product not found!' });
      }

      res.send(product);
    } catch (e) {
      res.status(500).send({ message: 'Update product failed.', error: e.message });
    }
  })
  .delete([auth, admin], async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: 'Product does not exist!' });
      }
      res.json(product);
    } catch (e) {
      res.status(500).send({ message: 'Delete product failed.', error: e.message });
    }
  });

module.exports = router;
