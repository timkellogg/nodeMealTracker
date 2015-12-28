// Invalid date handler
// Used because try...catch doesn't catch date errors
Date.prototype.isValid = function() {
  return this.getTime() === this.getTime();
};

exports.convertDate = function(str) {
  var date = new Date(str);

  
  // if (str !== '' && !isNaN(date)) {
  //   return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + '';
  // } else {
  //   return '';
  // }
};
