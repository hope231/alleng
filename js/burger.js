$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header-bot-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});