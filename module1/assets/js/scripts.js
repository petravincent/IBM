$(document).ready(function () {
    $("ul.navbar-nav li a").click(function(event) {
        $(this).parents(".navbar-collapse").removeClass('in');
        console.log($(this).parents(".navbar-collapse").attr("aria-expanded", "false"));
    });
});