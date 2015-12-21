var express = require('express');
var mealsRouter = express.Router();
var namespace = 'meals';

var router = function(nav, knex) {

  mealsRouter.route('/')
    .get(function(req, res) {
      knex.select('*').from('meals')
        .then(function(queryResults) {
          return queryResults;
        })
        .then(function(queryResults) {
          // res.send(queryResults);
          res.render(namespace + '/index', {
            meals: queryResults
          });
        })
        .catch(function(err) {
          console.log(err);
          res.send('404 Not Found');
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
