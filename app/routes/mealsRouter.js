var express = require('express');
var mealsRouter = express.Router();
var namespace = 'meals';

// var meals = [{
//   type: "breakfast",
//   timeOfDate: "",
//   foods: [{
//     name: "banana",
//     caloriesPerServing: 100,
//     servings: 1,
//   }, {
//     name: "milk",
//     caloriesPerServing: 150,
//     servings: 2
//   }]
// }];

var router = function(nav) {

  mealsRouter.route('/')
    .get(function(req, res) {
      res.render(namespace + '/index');
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
