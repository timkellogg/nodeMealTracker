var base = require('./base');

var Food = base.Model.extend({
  tableName: 'foods',
  meal: function() {
    return this.belongsTo(Meal);
  }
});

module.exports = Food;
