$(document).ready(function() {
  
  $('#newDayForm').submit(function(evt) {
    evt.preventDefault();

    // Error handling 
    try {
      var date = moment( $('#date').val() );
    } catch(err) {
      alert('fucked it up');
    }

    $.ajax({
      method: 'POST',
      url: '/days',
      data: { date: date }
    })
    .done(function(msg) {
      console.log(msg)
    })
    .fail(function(msg) {
      console.log(msg)
    })
    .always(function() {
      console.log('finished')
    });
  });
});