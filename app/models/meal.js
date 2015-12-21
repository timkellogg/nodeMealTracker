var bookshelf = require('./base');
var Day = require('./day');
var Food = require('./food');

var Meal = bookshelf.Model.extend({
  tableName: 'meals',
  foods: function() {
    return this.hasMany(Food);
  },
  day: function() {
    return this.belongsTo(Day);
  }
});

module.exports = bookshelf.model('Meal', Meal);
