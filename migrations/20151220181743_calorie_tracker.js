exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('days', function(table) {
      table.increments('id').primary();
      table.date('date').notNullable();
    }),

    knex.schema.createTable('meals', function(table) {
      table.increments('id').primary();
      table.string('type_of_meal').notNullable();
      table.time('time_of_day').notNullable();
      table.integer('day_id').unsigned()
        .references('id')
        .inTable('days')
        .onDelete('CASCADE');
    }),

    knex.schema.createTable('foods', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('calories_per_serving');
      table.integer('servings');
      table.integer('meal_id').unsigned()
        .references('id')
        .inTable('meals')
        .onDelete('CASCADE');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE meals, foods, days CASCADE');
};

