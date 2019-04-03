---
order: 2
background-image: red-light-bulb
image: do-code
---

<div class='container'>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <div class="slider__slide-content">
        <h2 class="slider__slide-title">Test</h2>
        <ul>
          <li>Gathers requirements</li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-2 col-md-4 col-sm-3"></div>
    <div class="col-lg-4 col-md-4 col-sm-6">
      {% if page.image %}
        {% assign slide_image = site.data.images[page.image] %}
        <img class="slider__slide-illustration" src="{{ slide_image.file }}" alt="{{ slide_image.description }}">
      {% endif %}
    </div>
    <div class="col-lg-2 col-md-4 col-sm-3"></div>
  </div>
</div>
