$(document).ready(function(){

  $('.scroll-container').hide().delay(3000).fadeIn(2200);

  var winHeight = ($(window).height())* 1.4;
  var picHeight = $('.element-1').height();
  var offsetHeight = (winHeight + picHeight);
  $('.element-2').css('margin-top', offsetHeight + "px");
  $('.element-1').css('top', winHeight  + "px" );

  var $form = $('#subscribe-form');
  var $input = $('.email');

  if ( $form.length > 0 ) {
    $('body').bind('keypress', function ( event ) {
      var key = event.which || event.keyCode;
        if (key === 13){
          $form.submit();
          $form[0].reset();
          $input.prop('disabled', true);
          $input.addClass("entered");
          $input.attr("placeholder", "THANK YOU!");
        };
      });
    };
});
