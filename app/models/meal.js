var base = require('./base');

var Meal = base.Model.extend({
  tableName: 'meals',
  foods: function() {
    return this.hasMany(Food);
  },
  day: function() {
    return this.belongsTo(Day);
  }
});

module.exports = Meal;
