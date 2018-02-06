'use strict';

var mainpageSlider = $('.mainpage-slider-block');

mainpageSlider.on('init', function( event, slick ){
  var content = slick.$slides[0];
  content.querySelector('.mainpage-slider-block__content').classList.add('active');
});

mainpageSlider.slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  speed: 600,
  dots: true,
  appendDots: '.mainpage-slider-block__dots-wrapper',
  cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)'
});

mainpageSlider.on('beforeChange', function( event, slick, currentSlide ){
  var content = slick.$slides[currentSlide];
  content.querySelector('.mainpage-slider-block__content').classList.remove('active');
});

mainpageSlider.on('afterChange', function( event, slick, currentSlide ){
  var content = slick.$slides[currentSlide];
  content.querySelector('.mainpage-slider-block__content').classList.add('active');
});