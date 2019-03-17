
var Swiper = require('swiper');

function home() {
  new Swiper('#home-swiper', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    parallax: true
  });
}

module.exports = {
  home: home
}
