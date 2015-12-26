exports.convertDate = function(str) {
  var date = new Date(str);
  return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
};
// module.exports = function formatDate(str) {
//   var date = new Date(str);
//   var str = "";
//   str += (date.getMonth() + 1) + "/";
//   str += date.getDate() + "/";
//   str += date.getFullYear();
//   return str;
// }
