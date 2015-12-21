var knex = require('../../config/db');
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
