exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('days', function(table) {
      table.increments('id').primary();
      table.date('date').notNullable();
    }),

    knex.schema.createTable('meals', function(table) {
      table.increments('id').primary();
      table.string('typeOfMeal').notNullable();
      table.time('timeOfDay').notNullable();
      table.integer('dayId').unsigned()
        .references('id')
        .inTable('days');
    }),

    knex.schema.createTable('foods', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('caloriesPerServing');
      table.integer('servings');
      table.integer('mealId').unsigned()
        .references('id')
        .inTable('meals');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE meals, foods, days CASCADE');
};

