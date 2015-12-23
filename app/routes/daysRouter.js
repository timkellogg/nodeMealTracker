var express = require('express');
var daysRouter = express.Router();
var namespace = 'days';
var Day = require('../models/day');
var Meal = require('../models/meal');

var router = function(nav, knex) {

  // SHOW /days/:day_id
  daysRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      var meals;

      // Get meals 
      Meal.where({
          day_id: id
        }).fetchAll()
        .then(function(queryResults) {
          meals = queryResults.toJSON();

          // Get day 
          Day.where({
              id: id
            }).fetch()
            .then(function(queryResults) {
              day = queryResults.toJSON();

              // render page 
              res.render(namespace + '/show', {
                day: day,
                meals: meals
              });
            })
            .catch(function(err) {
              res.status(500).send(err)
            });
        })
        .catch(function(err) {
          res.status(500).send(err)
        });
    });

  // INDEX /days
  daysRouter.route('/')
    .get(function(req, res) {
      Day.fetchAll({})
        .then(function(queryResults) {
          res.render(namespace + '/index', {
            days: queryResults.toJSON()
          });
        })
        .catch(function(err) {
          res.status(500).send(err);
        });
    });

  return daysRouter;
}

module.exports = router;
