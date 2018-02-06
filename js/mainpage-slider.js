'use strict';

var mainpageSlider = $('.mainpage-slider-block');

mainpageSlider.slick({
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  speed: 600,
  dots: true,
  appendDots: '.mainpage-slider-block__dots-wrapper',
  cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)'
});