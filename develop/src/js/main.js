
// $(function () {
//   var isClosed = false;
//          var autoCloseTimer = false;
//          setTimeout(addScrollListener, 5000);
//
//          function addScrollListener() {
//              window.addEventListener('scroll', function () {
//                  clearTimeout(autoCloseTimer);
//                  if (isClosed || window.pageYOffset > window.innerHeight * .5) {
//                      if (isClosed) {
//                          isClosed = false;
//                          $('.cont_r').animate({ opacity: 0 }, 400, function () {
//                              $(this).css({
//                                  opacity: 1,
//                                  top: 0
//                              });
//                          });
//                      }
//
//                      $('.cont_r').addClass('isOpen');
//                      autoCloseTimer = setTimeout(autoClose, 8000);
//                  } else {
//                      $('.cont_r').removeClass('isOpen');
//                  }
//         }
//     }
// });
