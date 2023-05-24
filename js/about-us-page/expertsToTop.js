/*
** scroll to top button controller
*/
function toTop() {
  const oScrollToTop = document.getElementsByClassName('experts-scroll-to-top')[0];

  oScrollToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

$(document).ready(function() {
  if (document.body.clientWidth < 1280) {
    const navHeight = $('.header-wrapper').height();

    $('.experts-scroll-to-top').hide();

    $(window).scroll(function() {
      const rollIt = $(this).scrollTop() >= navHeight;

      if (rollIt) {
        $('.experts-scroll-to-top').show();
      } else {
        $('.experts-scroll-to-top').hide();
      }
    });
  }
});

toTop();
