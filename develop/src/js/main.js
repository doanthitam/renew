$(function() {
  $(".menu_btn").click(function() {
    if ($("#cv_nav").hasClass("hidden")) {
      $("#cv_nav").attr("class", "visible animated slideInLeft");
    } else {
      $("#cv_nav").attr("class", "hidden animated slideOutLeft");
    }
    $(this).toggleClass("open");
  });

  $("#cv_nav").click(function() {
    if ($("#cv_nav").hasClass("visible")) {
      $(".menu_btn").toggleClass("open");
    } else {
    }
    $(this).attr("class", "slideOutLeft hidden");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if ($("#cv_nav").hasClass("visible")) {
        $(".menu_btn").toggleClass("open");
      } else {
      }
      $("#cv_nav").attr("class", "slideOutLeft hidden");
    }
  });
//scroll//

      $(window).scroll(function(){
          var heightcont = $('.cont_r').outerHeight()
          var heightwindown = $( window ).height()
          var heightscreen = heightcont - heightwindown

          console.log('hh', heightscreen)
          console.log('sc', $(this).scrollTop())
          if($(this).scrollTop() > 50) {
            $('#header').hide();
            $('.cont_r').addClass('opencontent')
          } else {
            $('.cont_r').removeClass('opencontent')
            $('#header').show();
          }
          if($(this).scrollTop() > heightscreen) {
            $('.cont_r').addClass('opencontent1')
          } else {
            $('.cont_r').removeClass('opencontent1')
          }
      });

});
