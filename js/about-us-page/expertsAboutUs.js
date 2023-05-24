/* global $ */

$(document).ready(function() {
  $('.carousel').slick({
    dots: true,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: false,
        },
      }],
  });

  $('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    if (currentSlide === 3 && ((screen.width >= 768 && screen.width <= 1280))) {
      setTimeout(function() {
        $('.carousel .slick-track').css({ transform: 'translate3d(-935px, 0px, 0px)' });
      }, 100);
    }
  });

  $('.slider').slick({
    slidesToShow: 1,
    dots: true,
    centerMode: false,
    infinite: true,
  });
});
