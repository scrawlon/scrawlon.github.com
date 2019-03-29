var sliders = require('./sliders');

// var Velocity = require('velocity-animate');
// require('./header');
// require('./mobileMenu');
// require('fg-loadcss');
// require('./velocity-animation');
// require('./homeSlider');

window.onload = function() {
  var urlPath = window.location.pathname;

  sliders.home();

  if ( urlPath.indexOf('/portfolio') !== -1 ) {
    require('./portfolio');
  }
}
