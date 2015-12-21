var knex = require('../../config/db');
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
