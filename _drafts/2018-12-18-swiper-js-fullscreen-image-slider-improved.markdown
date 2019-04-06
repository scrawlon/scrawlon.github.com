---
layout: post
title: "Swiper JS Fullscreen Image Slider (Improved!)"
description: "A better method to create fullscreen image sliders with SwiperJS"
author: Scott McGrath
header_image: swiper-js-fullscreen
date: "2018-12-18 12:08:27 -0500"
---

This is an update to [a post I wrote a year ago][1].
You do not need to read that post to follow this. Here, I'll describe
an alternative way to create a fullscreen SwiperJS image slider
with step-by-step instructions.

The complete project code is available here:
[Swiper JS fullscreen image slider (complete) on GitHubGist][7]{:target="\_blank"}{:rel="noopener noreferrer"}

A full working demo is available here:
[Swiper JS fullscreen image slider (complete) on CodePen][8]{:target="\_blank"}{:rel="noopener noreferrer"}

## Intro / Basic Swiper Configuration

[`preview on CodePen`][3]{:target="\_blank"}{:rel="noopener noreferrer"}

[Swiper JS][2]{:target="\_blank"}{:rel="noopener noreferrer"}
is a JavaScript library for creating slideshows that works
out-of-the-box with minimal configuration. The html code below creates a
simple slideshow with three slides:

<script src="https://gist.github.com/scrawlon/c4ad8f45b1a91a7b9b70a99ce28d0392.js"></script>

In the html header, we're loading the Swiper JS css file from CDN. We also
included some custom css for the swiper classes '.swiper-container' and
'.swiper-slide'.

In the html body, we have the required Swiper divs laid out as follows:

* `.swiper-container`
  * `.swiper-wrapper`
    * `.swiper-slide`
    * `.swiper-slide`
    * `.swiper-slide`

At the bottom of the page we're loading the Swiper JS JavaScript file from CDN.
We also include custom JS code to load and configure the slideshow. This code
is pretty self-explanatory. We're instantiating Swiper on the '.swiper-container'
div. The slideshow will loop infinitely. The are 3 slides per view with 10px
space between the slides. The remainder of the config sets classes for
navigation and pagination.

## Add Images

[`preview on CodePen`][5]{:target="\_blank"}{:rel="noopener noreferrer"}

Now that we have a basic slideshow working, let's add images to the slides.
For this tutorial, we'll use Creative Commons licensed images from the
['NASA Goddard Space Flight Center' Flickr account.][4]{:target="\_blank"}{:rel="noopener noreferrer"}
In order to meet the CC license requirements, we must include a photo credit
and a link to the CC license for each image.

In each slide, we'll add an '&lt;img&gt;' tag to display the image file and
a '&lt;figcaption&gt;' tag to display the photo credit and license links.
Edit the '.swiper-slide' divs to match this code:

<script src="https://gist.github.com/scrawlon/5ec08e93a2e5e41fe47e45b76e1cddf5.js"></script>

Next, we need to add CSS for the '&lt;img&gt;', '&lt;figcaption&gt;' and '&lt;a&gt;' tags.
Edit the CSS to match this:

<script src="https://gist.github.com/scrawlon/469e46c2bddbaf51eed971218fbeb7cb.js"></script>

## Add Fullscreen Image Function

[`preview on CodePen`][6]{:target="\_blank"}{:rel="noopener noreferrer"}

The goal is to make the slider images clickable, so they'll open fullscreen.
The view will change from the multi-slide view to fullscreen mode.
We'll still be able to swipe through all slides in fullscreen mode, and
we'll also be able to return to the multi-slide view.

### Fullscreen JavaScript

<script src="https://gist.github.com/scrawlon/5975812da90656581203c3916b194d0f.js"></script>

In the above code, we create a 'swiperSlides' array.
For each slide in the array, we add an
'openFullscreenSliderHandler' and 'closeFullscreenSliderHandler'.

`'openFullscreenSliderHandler'` attachs a 'click' handler to each 'slideImage' that:
  * Calls 'openFullscreenSwiper'
  * Adds 'fullscreen' class to swiper
  * Changes 'slidesPerView' to '1'
  * Slides to the correct 'slideNumber'

`'closeFullscreenSliderHandler'` adds 'backdrop' and 'closeButton' divs,
with 'click' handlers that:
  * Calls 'closeFullscreenSwiper'
  * Removes 'fullscreen' class from swiper
  * Changes 'slidesPerView' to '3'
  * Slides to the correct 'slideNumber'

### Fullscreen CSS

<script src="https://gist.github.com/scrawlon/bc0c45c3cf58f0a90b6a78dbd9a20d8f.js"></script>  

`.swiper-container.fullscreen`

In our JavaScript code, we add the class, 'fullscreen', to our swiper.
In our CSS, we add '.swiper-container.fullscreen' and set the
'height' to '100vh'.

`.swiper-slide img`

We add a 'z-index: 2' attribute to layer slide images with other
elements that also use 'position: absolute' (more about layering below).
We add the 'cursor-pointer' to make the image element appear 'clickable'
to users.

`.swiper-slide figcaption`

'z-index: 3' (more about layering below).

`.fullscreen .swiper-slide img`

'pointer-events: none' keeps our image click handler from running when in
fullscreenmode.

`.fullscreen .swiper-slide .backdrop` and `.fullscreen .swiper-slide .close-button`

In our JavaScript, we added a '.backdrop' and '.close-button' div to each of
our Swiper slides. The CSS for these is self-explanatory.

### Layering with z-index

When multiple items are absolutely positioned within the same container,
they might overlap. We can use 'z-index' to layer
elements in the order we choose. Higher 'z-index' values display in front of
lower values.

We order our fullscreen slide content as follows (back to front):
* 'z-index: 1' `.fullscreen .swiper-slide .backdrop`
* 'z-index: 2' `.swiper-slide img`
* 'z-index: 3' `.swiper-slide figcaption`
* 'z-index: 4' `.fullscreen .swiper-slide .close-button`

The backdrop is in back, followed by the image. The figcaption displays on top
of the image, and the close button is in the very front. These elements are
sized an absolutely positioned, so they are all visible at the same time.

## Finished code

<script src="https://gist.github.com/scrawlon/647a109044c9d04fa1af900e2fdd61c0.js"></script>

[1]: /2017/07/29/swiper-js-fullscreen-image-slider/
[2]: https://idangero.us/swiper/
[3]: https://codepen.io/smcgrath/pen/WLomdm
[4]: https://www.flickr.com/photos/gsfc/
[5]: https://codepen.io/smcgrath/pen/REjmLZ
[6]: https://codepen.io/smcgrath/pen/bOMRqv
[7]: https://gist.github.com/scrawlon/647a109044c9d04fa1af900e2fdd61c0
[8]: https://codepen.io/smcgrath/pen/bOMRqv
