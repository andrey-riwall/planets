// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune"
];
var slider = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

slider.on('slideChange', function() {
  gsap.to('.slide-text span', 0.2, {
    x: "-120px"
  })
  gsap.to('.slide-number span', 0.2, {
    x: "-200px"
  })
  gsap.to('.slide-detail span', 0.5, {
    x: "-1000px"
  })
  gsap.to('.slide-detail-facts div', 0.5, {
    x: "-1000px"
  })
  gsap.to('.swiper-slider-active', 0.5, {
    scale: 0.85
  })
  gsap.to('.swiper-slider .slide-img', 1, {
    rotation: 20
  })
})

slider.on('slideChangeTransitionEnd', function() {
  gsap.to('.slide-text span', 0.2, {
    x: 0,
    delay: 0.1
  })
  gsap.to('.slide-text span', 0.2, {
    x: 0
  })

  gsap.to('.slide-number span', 0.2, {
    x: 0,
    delay: 0.1
  })
  gsap.to('.slide-number span', 0.2, {
    x: 0
  })

  gsap.to('.slide-detail span', 0.5, {
    x: 0
  })

  gsap.to('.slide-detail-facts div', 0.5, {
    x: 0
  })

  gsap.to('.swiper-slider-active', 0.5, {
    scale: 1,
    ease: Power4.easeOut
  })
  gsap.to('.swiper-slider .slide-img', 1, {
    rotation: 10
  })
})