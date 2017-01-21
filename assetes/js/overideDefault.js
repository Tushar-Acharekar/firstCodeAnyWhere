$(document).ready(function(){

var finalHeight = $(".navbar-fixed-top").position().top + $(".navbar-fixed-top").outerHeight(); 
var screenWidth = screen.width;

if(screenWidth <= 767){
	$(".mainBody").css({"position": "relative", "top":finalHeight-25});
}
else{
	$(".mainBody").css({"position": "relative", "top":finalHeight});
	$(".leftPanel").css({"position": "relative", "top":finalHeight});
}
		
    $(".leftPanel .nav-pills li").click(function(ev){
		$(".leftPanel .nav-pills li").removeClass("active");
        $(this).addClass("active");
		ev.stopPropagation();
    }); 
	
	$(".hideDesktop").click(function(ev){
		if (parseFloat($(".connect_leftMenuMob").css("left")) < -1 ){
			$(".connect_leftMenuMob").animate({left: '-1px'});
			}
        else{$(".connect_leftMenuMob").animate({left: '-75%'});} 
		ev.stopPropagation();
    });
	
	$("body").click(function(ev){
		if (parseFloat($(".connect_leftMenuMob").css("left")) == -1 ){
			$(".connect_leftMenuMob").animate({left: '-75%'});
		}
		ev.stopPropagation();
    });	
});
