exports.convertDate = function(str) {
  var date = new Date(str);
  return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
};
