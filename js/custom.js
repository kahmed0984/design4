$(document).ready(function(){
	$('.mobile_menu_icon').click(function(){
		$('nav').css({
			'display':'block !important'
		});
	});
	$('body').materialScrollTop();
	new WOW().init();

});