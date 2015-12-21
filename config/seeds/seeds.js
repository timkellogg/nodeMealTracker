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
          typeOfMeal: 'breakfast',
          timeOfDay: '04:05:06 PST',
          dayId: 1
        });
    })
    .then(function() {
      return knex('foods')
        .insert({
          id: 1,
          name: 'cereal',
          caloriesPerServing: 200,
          servings: 2,
          mealId: 1
        });
    })
    .catch(function(err) {
      console.log('Seed error: ' + err);
    });
};
