$(document).ready(function(){
	$('.popup-link').click(function(event){
		$('.popup,.popup__g').toggleClass('open');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.popup-close,.popup__g').click(function(event){
		$('.popup,.popup__g').removeClass('open');
		$('body').removeClass('lock');
	});
});