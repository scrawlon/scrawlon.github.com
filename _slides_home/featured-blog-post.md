---
order: 2
background-image: do-code
---

{% assign featured_post = site.posts | first %}

<div class='container'>
  <div class="row">
    <div class="col-lg-2 col-md-1"></div>
    <div class="col-lg-8 col-md-10 my-auto">
      <a class="slider__slide-link" href="{{ site.url }}{{ featured_post.url }}">
        {% if featured_post.header_image %}
          {% assign slide_image = site.data.images[featured_post.header_image] %}
          <img class="slider__slide-illustration" src="{{ slide_image.file }}" alt="{{ slide_image.description }}">
        {% endif %}
        <h1 class="slider__slide-illustration-title">{{ featured_post.title }}</h1>
      </a>
    </div>
  </div>
</div>
