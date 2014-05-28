$(document).ready(function(){
  //$('#video_area').click(function(){
  // $('#video_area').addClass('fade');
  // $('#video').toggleClass('hidden');
  //});

  //$('#background').mouseenter(function(){
  //	$(this).animate({'opacity':.7},200);
  //  $(this).text("Watch the Video!");
	//});
  //$('#background').mouseleave(function(){
  //	$(this).animate({'opacity':1},200);
  //  $(this).text("");
  //});

  $('.playButton').click(function(){
    $(this).addClass('hidden');
    $('#video').removeClass('hidden');
    $('#video_area').addClass('fade',500);
  });

  setInterval(function(){
    if ($(window).scrollTop()>=window.innerHeight-60){
      $("#navbar").slideDown('fast');
    }
  },50);

  setInterval(function(){
    if ($(window).scrollTop()<window.innerHeight-60){
      $("#navbar").slideUp('fast');
    }
  },50);

});