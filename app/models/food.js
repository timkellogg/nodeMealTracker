var bookshelf = require('./base');
var Meal = require('./meal');

var Food = bookshelf.Model.extend({
  tableName: 'foods',
  meal: function() {
    return this.belongsTo(Meal);
  }
});

module.exports = bookshelf.model('Food', Food);
