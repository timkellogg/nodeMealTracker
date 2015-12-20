var express = require('express'),
  mealsRouter = express.Router(),
  namespace = 'meals';

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
