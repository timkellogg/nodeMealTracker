var bookshelf = require('./base');
var Meal = require('./meal');

var Day = bookshelf.Model.extend({
  tableName: 'days',
  meals: function() {
    return this.hasMany(Meal);
  }
});

module.exports = bookshelf.model('Day', Day);
