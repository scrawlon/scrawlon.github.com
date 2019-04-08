
var Swiper = require('swiper');

function home() {
  var homeSwiper = document.querySelector('#home-swiper');

  if ( !homeSwiper ) return false;

  new Swiper('#home-swiper', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    parallax: true,
    autoplay: 6000,
    speed: 500
  });
}

module.exports = {
  home: home
}
