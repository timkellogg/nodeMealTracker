var express = require('express');
var daysRouter = express.Router();
var namespace = 'days';
var Day = require('../models/day');
var Meal = require('../models/meal');
var Food = require('../models/food');
var knex = require('../../config/db');
var h = require('../helpers/convertDate');

var router = function(nav, knex) {

  // CREATE DAY/MEALS
  daysRouter.route('/:id/meals')
    .post(function(req, res) {

      var type_of_meal = req.body.type_of_meal;
      var time = req.body.time;
      var day_id = req.body.day_id;

      new Meal({
        type_of_meal: type_of_meal,
        time_of_day: time,
        day_id: day_id
      }).save().then(function(msg) {
        res.send(msg)
      });
    });

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

  // CREATE /days
  daysRouter.route('/')
    .post(function(req, res) {
      var date = req.body.date;

      new Day({
        date: date
      }).save().then(function(msg) {
        res.send(msg);
      });
    });

  // DELETE /day
  daysRouter.route('/:id')
    .delete(function(req, res) {
      var id = req.params.id;

      new Day({
          id: id
        }).destroy()
        .then(function(msg) {
          res.send(msg);
        })
        .catch(function(msg) {
          res.status(500).send(msg)
        });
    });

  return daysRouter;
}

module.exports = router;
