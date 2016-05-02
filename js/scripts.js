// function scrollIt(offsetHeight){
//
//   $(window).scroll(function(){
//
//
//     $(".element-1").css("bottom", ( offsetHeight - ($(this).scrollTop()) ));
//     console.log($(".element-1").css("bottom"));
//     // console.log($(".element-1").css("top"));
//      var winHeight = $(window).height();
//      var winWidth = $(window).width();
//     //  console.log($(window).scrollTop())
//     //  console.log("height: " + winHeight + " AND width: " + winWidth);
//   });
// }

$(document).ready(function(){

  $('.scroll-container').hide().delay(3000).fadeIn(2200);

  var winHeight = ($(window).height())* 1.4;
  var picHeight = $('.element-1').height()
  console.log(winHeight);
  console.log(picHeight);
  var offsetHeight = winHeight + picHeight *.9
  console.log(offsetHeight);
  $('.element-2').css('margin-top', offsetHeight + "px")
  // console.log($('.element-2').css('margin-top'));
  $('.element-1').css('top', winHeight  + "px" );
  // console.log($('.element-1').css('bottom'));
  //
  // $(window).scroll(function(){
  //   $(".element-1").css("bottom", Math.min( 0, (-(offsetHeight)+(($(this).scrollTop())*.8)) ) );
  // });

    // I only have one form on the page but you can be more specific if need be.
  var $form = $('#subscribe-form');

  if ( $form.length > 0 ) {
    $('body').bind('keypress', function ( event ) {
      var key = event.which || event.keyCode;
        if (key === 13){
          $form.submit();



          // $.ajax({
          //     type: "GET", // GET & url for json slightly different
          //     url: "http://lerinandandrew.us13.list-manage.com.list-manage2.com/subscribe/post-json?c=?",
          //     data: $form.serialize(),
          //     dataType    : 'jsonp',
          //     contentType: "application/json; charset=utf-8",
          //     error       : function(err) { alert("Could not connect to the registration server."); },
          //     success     : function(data) {
          //         if (data.result != "success") {
          //           console.log('OOPS');
          //             // Something went wrong, parse data.msg string and display message
          //         } else {
          //           console.log("DID IT");
          //             // It worked, so hide form and display thank-you message.
          //         }
          //     }
          // });
          // return false;
        };
      });
    };
});

// function register($form) {
//     $.ajax({
//         type: $form.attr('method'),
//         url: $form.attr('action'),
//         data: $form.serialize(),
//         cache       : false,
//         dataType    : 'jsonp',
//         contentType: "application/jsonp; charset=utf-8",
//         error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
//         success     : function(data) {
//           console.log(data)
//             if (data.result != "success") {
//                 // Something went wrong, do something to notify the user. maybe alert(data.msg);
//             } else {
//                 // It worked, carry on...
//             }
//         }
//     });
// }
