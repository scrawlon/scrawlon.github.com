var sliders = require('./sliders');

// var Velocity = require('velocity-animate');
// require('./header');
// require('./mobileMenu');
// require('fg-loadcss');
// require('./velocity-animation');
// require('./homeSlider');

window.onload = function() {
  var urlPath = window.location.pathname;

  if ( urlPath === '/' ) {
    console.log('on home page. load home slider.');
    sliders.home;
  }

  if ( urlPath.indexOf('/portfolio') !== -1 ) {
    require('./portfolio');
  }
}
