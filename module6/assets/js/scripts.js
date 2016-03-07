$(document).ready(function () {
    $("ul.navbar-nav li a").click(function(event) {
    	console.log("asdas");
        $(this).parents(".navbar-collapse").removeClass('in');
        console.log($(this).parents(".navbar-collapse").attr("aria-expanded", "false"));
    });

    $("input[name='optionsRadios']").change(function(e){
	    e.preventDefault();
	    //console.log($(this).data("swag"));
	    if ($(this).data("swag") === "hellyes") {
	    	$(".result").removeClass("hide").addClass("show").append( "<h2>Correct</h2><p>This is the correct answer!</p>" );
	    }
	    else {
	    	$(".result").removeClass("show").addClass("hide").html("");
	    }
	});
});