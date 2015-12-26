exports.convertDate = function(str) {
  var date = new Date(str);

  if (str !== '' && !isNaN(date)) {
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  } else {  
    return ''; 
  }
};

