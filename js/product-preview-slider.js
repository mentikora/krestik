'use strict';

var productSlider = $('.product-slider');

productSlider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  infinite: false,
  arrows: true,
  speed: 600,
  dots: false,
  cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)'
});