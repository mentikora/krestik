'use strict';


$('.product-view-slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  infinite: false,
  arrows: true,
  speed: 600,
  dots: false,
  cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-arrows-1"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="flaticon-arrows"></i></button>',
  responsive: [
    {
      breakpoint: 569,
      settings: {
        arrows: false
      }
    }
  ],
  asNavFor: '.product-view-slider-nav'
});

$('.product-view-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  infinite: false,
  arrows: false,
  asNavFor: '.product-view-slider-single',
  cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  dots: false,
  centerMode: true,
  centerPadding: '10px',
  variableWidth: true,
  focusOnSelect: true
});