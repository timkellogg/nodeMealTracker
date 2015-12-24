$(document).ready(function() {

  $('#add_day_meal_form').submit(function(evt) {
    evt.preventDefault();

    let mealType = $('#type_of_meal').val();
    let time = $('#time').val();
    let id = $('#day').val();

    $.ajax({
      method: 'POST',
      url: `/days/${id}/meals`,
      data: {
        type_of_meal: mealType,
        time: time,
        day_id: id
      }
    })
    .done(function(msg) {
      console.log(msg);
    })
    .fail(function(msg) {
      console.log(msg);
    })
    .always(function() {
      console.log('finished');
    });
  });
  
  $('#newDayForm').submit(function(evt) {
    evt.preventDefault();

    let el = $('#date');

    try {
      let date = el.val();

      $.ajax({
        method: 'POST',
        url: '/days',
        data: { date: date }
      })
      .done(function(msg) {
        console.log(msg);
        el.val('');
      })
      .fail(function(msg) {
        console.log(msg);
        // handle server error 
      })
      .always(function() {
        console.log('finished');
      });
    } catch(err) {
      // Handle client error
      alert('Invalid date format');
    };

  });

  $('.delete-btn').click(function(evt) {
    evt.preventDefault();

    var el = $(this);
    var id = el.attr('id');

    $.ajax({
      method: 'DELETE',
      url: `/days/${id}`
    })
    .done(function(msg) {
      console.log(msg);
      el.remove();
    })
    .fail(function(msg) {
      console.log(msg);
      // alert('Something went wrong');
    })
    .always(function() {
      console.log('finished')
    })
  });
});