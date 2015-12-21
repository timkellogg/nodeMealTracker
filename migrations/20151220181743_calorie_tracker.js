
exports.up = function(knex, Promise) {
  
  return Promise.all([

    knex.schema.createTable('meals', function(table) {
      table.increments('id').primary();
      table.string('typeOfMeal');
      table.timestamps();
    }),

    knex.schema.createTable('foods', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('caloriesPerServing');
      table.integer('servings');
      table.integer('meal_id')
        .references('id')
        .inTable('meals');
    }),

    knex.schema.createTable('food_meals', function(table) {
      table.increments('id').primary();
      table.integer('meal_id')
        .references('id')
        .inTable('meals');
      table.integer('food_id')
        .references('id')
        .inTable('foods');
    })
  ])
};

exports.down = function(knex, Promise) {
  
  return Promise.all([
    knex.schema.dropTable('meals'),
    knex.schema.dropTable('foods'),
    knex.schema.dropTable('food_meals')
  ])
};
