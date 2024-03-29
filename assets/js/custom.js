$(document).ready(function () {
  $('#sliders').owlCarousel({
    loop: true,
    slideSpeed: 300,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    navSpeed: 1000,
    singleItem: true,
    items: 1,
    stagePadding: 0,
    margin: 15,
    nav: false,
    rewindSpeed: 500,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('#relatedSlider').owlCarousel({
    loop: true,
    slideSpeed: 300,
    navSpeed: 1000,
    singleItem: true,
    items: 1,
    stagePadding: 0,
    margin: 15,
    nav: true,
    navText: ['<span class="icon-Prev"></span>', '<span class="icon-Next"></span>'],
    rewindSpeed: 500,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $('#propertySlider').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 20,
    width: 100,
    nav: true,
    navText: ['<span class="icon-Prev"></span>', '<span class="icon-Next"></span>'],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var stickymenu = document.getElementById("fixedmenu");
    var stickymenuoffset = stickymenu.offsetTop;

    window.addEventListener("scroll", function (e) {
      requestAnimationFrame(function () {
        if (window.pageYOffset > stickymenuoffset) {
          stickymenu.classList.add('sticky');
        } else {
          stickymenu.classList.remove('sticky');
        }
      })
    });
  });

  $('.heroCont .container .title > .item').on('click', function () {
    if ($('.heroCont .container .title > .item').has('active')) {
      $('.heroCont .container .title > .item ').removeClass('active').addClass('deactive');
    }
    $('.' + $(this).attr('data-src')).removeClass('deactive').addClass('active');
  });

  $('.categories .category').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.itemsContainer .row .filters .filter').on('click', function () {
    $(this).toggleClass('active');
  });
});