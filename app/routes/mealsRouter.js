var express = require('express');
var mealsRouter = express.Router();
var namespace = 'meals';
var Meal = require('../models/meal');

// var meals = Meal.fetchAll().then(function(collection) {
//   return collection;
// });

var meals = Meal.collection().fetch()
  .then(function(collection) {
    return meals.models;
  })
  .catch(function(err) {
    console.log(err);
  })

var router = function(nav, knex) {

  mealsRouter.route('/')
    .get(function(req, res) {
      Meal.fetchAll()
        .then(function(queryResults) {
          res.send(queryResults);
          // res.render(namespace + '/index', {
          //   meals: queryResults
          // });
        })
        .catch(function(err) {
          res.send(err);
        });
    });

  mealsRouter.route('/new')
    .get(function(req, res) {
      res.render(namespace + '/new');
    });

  mealsRouter.route('/edit/:id')
    .get(function(req, res) {
      // logic to find meal
      res.render(namespace + '/edit');
    });

  mealsRouter.route('/meals/:id')
    .get(function(req, res) {
      // logic to find meal
      res.render(namespace + '/show');
    });

  return mealsRouter;
};

module.exports = router;
