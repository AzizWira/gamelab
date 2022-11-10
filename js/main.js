let cursor = document.querySelector(".cursor");
let cursorInner = document.querySelector(".cursorInner");
document.addEventListener("mousemove", (event) => {
  cursor.style.cssText = cursorInner.style.cssText =
    "left: " + event.clientX + "px; top: " + event.clientY + "px;";
});

var items = document.querySelectorAll('.timeline li')

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains('in-view')) {
        items[i].classList.add('in-view')
      }
    } else if (items[i].classList.contains('in-view')) {
      items[i].classList.remove('in-view')
    }
  }
}

window.addEventListener('load', callbackFunc)
window.addEventListener('scroll', callbackFunc)

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  })
})


