const { Router } = require('express');
const Restaurant = require('../models/Restaurant');

module.exports = Router()
  .get('/', async (req, res) => {
    const restaurants = await Restaurant.getAll();
    res.json(restaurants);
  })
  .get('/:id', async (req, res, next) => {
    try {
      const restaurants = await Restaurant.getById(req.params.id);
      res.json(restaurants);
    } catch (e) {
      next(e);
    }
    
  });
