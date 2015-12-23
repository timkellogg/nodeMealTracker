var moment = require('moment');

exports.seed = function(knex, Promise) {
  return knex('days')
    .insert({
      id: 1,
      date: moment('2015-12-25')
    })
    .then(function() {
      return knex('meals')
        .insert({
          id: 1,
          type_of_meal: 'breakfast',
          time_of_day: '04:05:06 PST',
          day_id: 1
        });
    })
    .then(function() {
      return knex('meals')
        .insert({
          id: 2,
          type_of_meal: 'lunch',
          time_of_day: '09:10:06 PST',
          day_id: 1
        });
    })
    .then(function() {
      return knex('foods')
        .insert({
          id: 1,
          name: 'cereal',
          calories_per_serving: 200,
          servings: 2,
          meal_id: 1
        });
    })
    .then(function() {
      return knex('foods')
        .insert({
          id: 2,
          name: 'turkey club',
          calories_per_serving: 500,
          servings: 1,
          meal_id: 2
        });
    })
    .catch(function(err) {
      console.log('Seed error: ' + err);
    });
};
