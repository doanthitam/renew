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

  function addScrollListener() {
      window.addEventListener('scroll', function () {
          clearTimeout(autoCloseTimer);
          if (isClosed || window.pageYOffset > window.innerHeight * .5) {
              $('.cont_r').addClass('isOpen');
              autoCloseTimer = setTimeout(autoClose, 8000);
          } else {
              $('.cont_r').removeClass('isOpen');
          }
      }, supportsPassive ? { passive: true } : false);
  }

  function autoClose() {
      isClosed = true;
      $('.cont_r').removeClass('isOpen');
  }

});
