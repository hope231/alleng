$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header-menu,.header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(){
  $('.g').click(function(event){
    $('.header-burger,.header-menu,.header').removeClass('active');
    $('body').removeClass('lock');
  });
});