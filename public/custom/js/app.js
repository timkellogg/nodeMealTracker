"use strict";$(document).ready(function(){$("#newDayForm").submit(function(o){o.preventDefault();var n=$("#date");try{var e=n.val();$.ajax({method:"POST",url:"/days",data:{date:e}}).done(function(o){console.log(o),n.remove()}).fail(function(o){console.log(o)}).always(function(){console.log("finished")})}catch(t){alert("Invalid date format")}}),$(".delete-btn").click(function(o){o.preventDefault();var n=$(this),e=n.attr("id");console.log("/days/"+e),$.ajax({method:"DELETE",url:"/days/"+e}).done(function(o){console.log(o),n.remove()}).fail(function(o){console.log(o)}).always(function(){console.log("finished")})})});