const { Router } = require('express');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

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
  
  })
  .post('/:id/reviews', async(req, res, next) => {
    try {
      const data = await Review.insert(req.body);
      console.log(data);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
