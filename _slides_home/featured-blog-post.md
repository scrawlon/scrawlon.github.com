---
order: 2
background-image: do-code
image: swiper-js-fullscreen
---

<div class='container'>
  <div class="row">
    <div class="col-lg-12">
      <div class="slider__slide-content">
        <h1 class="slider__slide-title align-middle">Featured Blog Post</h1>
      </div>
    </div>
    <div class="col-md-2 col-sm-1"></div>
    <div class="col-md-8 col-sm-10 my-auto">
      {% if page.image %}
        {% assign slide_image = site.data.images[page.image] %}
        <img class="slider__slide-illustration" src="{{ slide_image.file }}" alt="{{ slide_image.description }}">
      {% endif %}
    </div>
  </div>
</div>
