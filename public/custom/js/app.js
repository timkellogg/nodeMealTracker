"use strict";$(document).ready(function(){$("#add_day_meal_form").submit(function(o){o.preventDefault();var a=$("#type_of_meal").val(),e=$("#time").val(),n=$("#day").val();$.ajax({method:"POST",url:"/days/"+n+"/meals",data:{type_of_meal:a,time:e,day_id:n}}).done(function(o){console.log(o)}).fail(function(o){console.log(o)}).always(function(){console.log("finished")})}),$("#newDayForm").submit(function(o){o.preventDefault();var a=$("#date");try{var e=a.val();$.ajax({method:"POST",url:"/days",data:{date:e}}).done(function(o){console.log(o),a.val("")}).fail(function(o){console.log(o)}).always(function(){console.log("finished")})}catch(n){alert("Invalid date format")}}),$(".delete-btn").click(function(o){o.preventDefault();var a=$(this),e=a.attr("id");$.ajax({method:"DELETE",url:"/days/"+e}).done(function(o){console.log(o),a.remove()}).fail(function(o){console.log(o)}).always(function(){console.log("finished")})})});