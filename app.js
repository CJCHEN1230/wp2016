console.log("hello");
$(document).ready(function(){
  $("h1").click(function(){
    $(this).hide();
  });
});

var temp="#Box";
var i=1;
$(document).ready(function(){
	$(".btn1").click(function(){
	  $(temp+i).hide();	  
	  i++;
	  console.log(i);
	}); 
});


$(document).ready(function(){
	$(".btn2").click(function(){
	for(j=1;j<7;j++){
		  $(temp+j).show();	  		
		}

	console.log(i);
	i=1;
	}); 
});