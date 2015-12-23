var express = require('express');
var mealsRouter = express.Router();
var namespace = 'meals';
var Meal = require('../models/meal');

var router = function(nav, knex) {

  // SHOW /meals/:id
  mealsRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      Meal.where({
          id: id
        }).fetch({
          withRelated: ['foods', 'day']
        })
        .then(function(queryResults) {
          res.render(namespace + '/show', {
            meal: queryResults.toJSON()
          });
        })
        .catch(function(err) {
          res.status(500).send('500: Something went wrong!');
        });
    });

  // INDEX /meals
  mealsRouter.route('/')
    .get(function(req, res) {
      Meal.fetchAll({
          withRelated: ['foods']
        })
        .then(function(queryResults) {
          res.render(namespace + '/index', {
            meals: queryResults.toJSON()
          });
        })
        .catch(function(err) {
          res.status(500).send('500 Error: Something went wrong!');
        });
    });

  mealsRouter.route('/new')
    .get(function(req, res) {
      res.render(namespace + '/new');
    });

  // CREATE /meals
  mealsRouter.route('/')
    .post(function(req, res) {
      res.send('recieved' + req.params);
    });

  mealsRouter.route('/edit/:id')
    .get(function(req, res) {
      // logic to find meal
      res.render(namespace + '/edit');
    });

  return mealsRouter;
};

module.exports = router;
