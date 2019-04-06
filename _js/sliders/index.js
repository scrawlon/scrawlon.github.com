
var Swiper = require('./swiper/dist/js/swiper.min.js');

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
  });
}


module.exports = {
  home: home
}
