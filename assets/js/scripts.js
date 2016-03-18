$(document).ready(function () {
    $("ul.navbar-nav li a").click(function(event) {
    	console.log("asdas");
        $(this).parents(".navbar-collapse").removeClass('in');
        console.log($(this).parents(".navbar-collapse").attr("aria-expanded", "false"));
    });

    $("input[name='optionsRadios']").change(function(e){
	    e.preventDefault();
	    //console.log($(this).data("swag"));

	    //When clicked, clear everything.
	    $(".result").html("");


	    if ($(this).data("swag") === "hellyes") {
	    	$(".result").removeClass("hide").addClass("show").append( "<div class='quiz-correct'><h4>Correct</h3><p>Please proceed to next slide</p></div>" );
	    }
	    else {
        $(".result").removeClass("hide").addClass("show").append( "<div class='quiz-incorrect'><h4>Incorrect</h3><p>Please try again before proceeding</p></div>" );  
//	    	$(".result").removeClass("show").addClass("hide").html("");
	    }
        
	});
    
    $(".carousel-control").click(function(){
    	 //When clicked, clear everything of short quiz results.
	    $(".result").html("");
    });
    
});
