function scrollIt(offsetHeight){

  $(window).scroll(function(){


    $(".element-1").css("bottom", offsetHeight - ($(this).scrollTop()));
    console.log($(this).scrollTop());
    // console.log($(".element-1").css("top"));
     var winHeight = $(window).height();
     var winWidth = $(window).width();
    //  console.log($(window).scrollTop())
    //  console.log("height: " + winHeight + " AND width: " + winWidth);
  });
}

$(document).ready(function(){

  var winHeight = $(window).height();
  var picHeight = $('.element-1').height()
  var offsetHeight = winHeight + picHeight
  $('.element-1').css('bottom', -offsetHeight);
  console.log($('.element-1').css('bottom'));
  scrollIt(offsetHeight)
})
