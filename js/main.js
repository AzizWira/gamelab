// function cursor

let cursor = document.querySelector('.cursor')
let cursorInner = document.querySelector('.cursorInner')
document.addEventListener('mousemove', (event) => {
  cursor.style.cssText = cursorInner.style.cssText =
    'left: ' + event.clientX + 'px; top: ' + event.clientY + 'px;'
})

// end of function cursor

// funchion progress bar and to top

const showOnPx = 100
const backToTopButton = document.querySelector('.back-to-top')
const pageProgressBar = document.querySelector('.progress-bar')

const scrollContainer = () => {
  return document.documentElement || document.body
}

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  })
}

document.addEventListener('scroll', () => {
  console.log('Scroll Height: ', scrollContainer().scrollHeight)
  console.log('Client Height: ', scrollContainer().clientHeight)

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100

  pageProgressBar.style.width = `${scrolledPercentage}%`

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden-top')
  } else {
    backToTopButton.classList.add('hidden-top')
  }
})

backToTopButton.addEventListener('click', goToTop)

// end of function progress bar and to top

// function poster slider

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
    autoplaySpeed: 4000,
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

// end of function poster slider

// funchion menu

// end of function menu

// function tabbar
var header = document.getElementById('tabbar-menu')
var btns = header.getElementsByClassName('btn-menu')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active-tabbar')
    current[0].className = current[0].className.replace(' active-tabbar', '')
    this.className += ' active-tabbar'
  })
}
// end of function tabbar

// function testimonial slider
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    2000: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
})
// end funchion slider
