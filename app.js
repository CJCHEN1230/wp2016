console.log("hello");
$(document).ready(function(){
  $("h1").click(function(){
    $(this).hide();
  });
});


$(document).ready(function(){
	$(".btn1").click(function(){
	  $("#Box2").hide();
	  $(this).hide();
	}); 
});