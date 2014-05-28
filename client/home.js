$(document).ready(function(){
  $('#container').click(function(){
   $('#background').toggleClass('hidden');
   $('#video').toggleClass('hidden');
  });

  //$('#background').mouseenter(function(){
  //	$(this).animate({'opacity':.7},200);
  //  $(this).text("Watch the Video!");
	//});
  //$('#background').mouseleave(function(){
  //	$(this).animate({'opacity':1},200);
  //  $(this).text("");
  //});

  setInterval(function(){
    if ($(window).scrollTop()>=window.innerHeight-60){
      $("#navbar").slideDown('fast');
    }
    //if ($(window).scrollTop()>=window.innerHeight){
    //  $('#background').css('position','fixed');
    //}
  },50);

  setInterval(function(){
    if ($(window).scrollTop()<window.innerHeight-60){
      $("#navbar").slideUp('fast');
    }
  },50);

});