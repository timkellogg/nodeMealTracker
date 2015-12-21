
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'calorie_tracker_development'
    }
  },

  // Need to add production stats 
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
