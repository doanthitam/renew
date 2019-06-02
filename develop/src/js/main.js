$(window).on('resize',function(){
  resize();
})
$(function() {
  $(".menu_btn").click(function() {
    if ($("#cv_nav").hasClass("hidden")) {
      $("#cv_nav").attr("class", "visible animated slideInLeft");
    } else {
      $("#cv_nav").attr("class", "hidden animated slideOutLeft");
    }
    $(this).toggleClass("open");
  });

//scroll//

      $(window).scroll(function(){
          var heightcont = $('.cont_r').outerHeight()
          var heightwindown = $( window ).height()
          var heightscreen = heightcont - heightwindown
          if($(this).scrollTop() > 50) {
            $('#header').hide();
            $(".cont_r").show(1000);
            $('.cont_r').addClass('opencontent')
          } else {
            $('.cont_r').removeClass('opencontent')
            $('#header').show();
          }
      });
});
