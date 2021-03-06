var homeLogoAnimation = require('./velocity-animations/home-logo-animation.js');
var scrollAnimation = require('./velocity-animations/scroll-animation.js');
var scrollToElement = require('./velocity-animations/scroll-to-element.js');

(function() {
  var svgScrawlonLogoFull = document.getElementsByClassName('scrawlon-logo-full');

  var animations = {
    homeLogoAnimationPlay: function() {
      homeLogoAnimation.velocityTimeline.forEach(function(timeline) {
        timeline.animation(timeline.startAt, timeline.endAt);
      });
    },
  }

  if ( svgScrawlonLogoFull.length ) {
    animations.homeLogoAnimationPlay();
  }

  svgScrollArrowAnimation();
})();


function svgScrollArrowAnimation() {
  var svgScrollArrow = document.getElementsByClassName('scroll-arrow');
  var article = document.getElementsByTagName('article');

  function scrollToElementPlay() {
    scrollToElement.velocityTimeline.forEach(function(timeline) {
      timeline.animation();
    });
  }

  if ( svgScrollArrow.length ) {
    for ( var i=0; i < svgScrollArrow.length; i++ ) {
      svgScrollArrow[i].onclick = function(event) {
        if ( article.length ) {
          scrollToElementPlay();
        }
      }
    }
  }
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    svgScrollArrowAnimation();
    /* console.log(mutations, observer); */
    // ...
});

var reactRoot = document.getElementById('root');

// define what element should be observed by the observer
// and what types of mutations trigger the callback
if ( reactRoot ) {
  observer.observe(reactRoot, {
    subtree: true,
    attributes: true
    //...
  });
}
