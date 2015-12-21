var base = require('./base');

var Day = base.Model.extend({
  tableName: 'days',
  meals: function() {
    return this.hasMany(Meal);
  }
});

module.exports = Day;
