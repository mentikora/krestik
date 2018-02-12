'use strict';

var productSlider = $('.product-slider');

productSlider.slick({
  slidesToShow: 3,
  slidesToScroll: 3,
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
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 569,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});