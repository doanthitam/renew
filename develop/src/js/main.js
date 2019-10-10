resize();
function resize() {
	if ($(window).width() <= 768) {
		$('.resimg').each(function(index,el) {
			$(el).attr('src', $(el).attr('src').replace('pc', 'sp'));
		});
	}
	else {
		$('.resimg').each(function(index,el) {
			$(el).attr('src', $(el).attr('src').replace('sp', 'pc'));
		});
	}
}
$(window).on('resize',function(){
  resize();
})
$(function() {
  $(".menu_btn").click(function() {
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
      $('.cv_nav').addClass('active');
    } else {
      $(this).removeClass('is-active');
      $('.cv_nav').removeClass('active');
      ('.cont_r').addClass('hidecontent');
    }
  });
	//scroll//
	$(window).scroll(function(){
			if ( $(window).scrollTop() >  200 ) {
				$('#header').hide();
				$(".cont_r").show();
				$('.cont_r').addClass('opencontent');
			} else {
				$('.cont_r').removeClass('opencontent');
				$('#header').show();
			}
	});
});



// 	slick
// 	$('.Slider').slick({
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 		dots: true,
// 		arrows: false,
// 		speed: 2000,
// 		fade: true,
// 		pauseOnHover: false,
// 		pauseOnFocus: false,
// 		pauseOnDotsHover: false,
// 	});
//
// 	/* ニューススライドショー */
// 	$('.Slider').slick({
// 		cssEase: 'ease-out',
// 		speed: 500,
// 	});
// });
