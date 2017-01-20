$(document).ready(function(){
    $(".navbar-fixed-top a button").click(function(){
		$(".navbar-fixed-top a button").removeClass("navbar-fixed-top-click");
        $(this).addClass("navbar-fixed-top-click");
    });
});