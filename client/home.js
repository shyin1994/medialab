$(document).ready(function(){
  $('#container').click(function(){
   $('#background').toggleClass('hidden');
   $('#video').toggleClass('hidden');
  });

  $('#background').mouseenter(function(){
  	$(this).animate({'opacity':.7},200)
	$(this).
	});
  $('#background').mouseleave(function(){
  	$(this).animate({'opacity':1},200)
	});
});