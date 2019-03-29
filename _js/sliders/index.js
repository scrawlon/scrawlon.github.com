
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
    parallax: true
  });
}


module.exports = {
  home: home
}
