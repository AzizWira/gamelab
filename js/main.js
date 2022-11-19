// if the page has finished loading, the page loading will close

// window.onload = () => {
//     document.getElementById("loading").style.display = "none";
// }

// funchion tabbar

const btnAll = document.querySelectorAll('#btn-all')
const btnTea = document.querySelectorAll('#btn-tea')
const btnYakult = document.querySelectorAll('#btn-yakult')
const btnMilkshake = document.querySelectorAll('#btn-milkshake')
const btnCoffee = document.querySelectorAll('#btn-coffee')
const btnCheese = document.querySelectorAll('#btn-cheese')

const newSeries = document.querySelectorAll('#new-series')
const tea = document.querySelectorAll('#tea')
const yakult = document.querySelectorAll('#yakult')
const milkshake = document.querySelectorAll('#milkshake')
const coffee = document.querySelectorAll('#coffee')
const cheese = document.querySelectorAll('#cheese')

// if btnTea is clicked, show tea and hide others display: none
btnTea.forEach((btn) => {
  btn.addEventListener('click', () => {
    tea.forEach((item) => {
      item.style.display = 'block'
    })
    yakult.forEach((item) => {
      item.style.display = 'none'
    })
    milkshake.forEach((item) => {
      item.style.display = 'none'
    })
    coffee.forEach((item) => {
      item.style.display = 'none'
    })
    cheese.forEach((item) => {
      item.style.display = 'none'
    })
    newSeries.forEach((item) => {
      item.style.display = 'none'
    })
  })
})

// if btnYakult is clicked, show yakult and hide others display: none
btnYakult.forEach((btn) => {
  btn.addEventListener('click', () => {
    yakult.forEach((item) => {
      item.style.display = 'block'
    })
    tea.forEach((item) => {
      item.style.display = 'none'
    })
    milkshake.forEach((item) => {
      item.style.display = 'none'
    })
    coffee.forEach((item) => {
      item.style.display = 'none'
    })
    cheese.forEach((item) => {
      item.style.display = 'none'
    })
    newSeries.forEach((item) => {
      item.style.display = 'none'
    })
  })
})

// if btnMilkshake is clicked, show milkshake and hide others display: none
btnMilkshake.forEach((btn) => {
  btn.addEventListener('click', () => {
    milkshake.forEach((item) => {
      item.style.display = 'block'
    })
    tea.forEach((item) => {
      item.style.display = 'none'
    })
    yakult.forEach((item) => {
      item.style.display = 'none'
    })
    coffee.forEach((item) => {
      item.style.display = 'none'
    })
    cheese.forEach((item) => {
      item.style.display = 'none'
    })
    newSeries.forEach((item) => {
      item.style.display = 'none'
    })
  })
})

// if btnCoffee is clicked, show coffee and hide others display: none
btnCoffee.forEach((btn) => {
  btn.addEventListener('click', () => {
    coffee.forEach((item) => {
      item.style.display = 'block'
    })
    tea.forEach((item) => {
      item.style.display = 'none'
    })
    yakult.forEach((item) => {
      item.style.display = 'none'
    })
    milkshake.forEach((item) => {
      item.style.display = 'none'
    })
    cheese.forEach((item) => {
      item.style.display = 'none'
    })
    newSeries.forEach((item) => {
      item.style.display = 'none'
    })
  })
})

// if btnCheese is clicked, show cheese and hide others display: none
btnCheese.forEach((btn) => {
  btn.addEventListener('click', () => {
    cheese.forEach((item) => {
      item.style.display = 'block'
    })
    tea.forEach((item) => {
      item.style.display = 'none'
    })
    yakult.forEach((item) => {
      item.style.display = 'none'
    })
    milkshake.forEach((item) => {
      item.style.display = 'none'
    })
    coffee.forEach((item) => {
      item.style.display = 'none'
    })
    newSeries.forEach((item) => {
      item.style.display = 'none'
    })
  })
})

// if btnAll is clicked, show all and hide others display: none
btnAll.forEach((btn) => {
  btn.addEventListener('click', () => {
    newSeries.forEach((item) => {
      item.style.display = 'block'
    })
    tea.forEach((item) => {
      item.style.display = 'block'
    })
    yakult.forEach((item) => {
      item.style.display = 'block'
    })
    milkshake.forEach((item) => {
      item.style.display = 'block'
    })
    coffee.forEach((item) => {
      item.style.display = 'block'
    })
    cheese.forEach((item) => {
      item.style.display = 'block'
    })
  })
})

// end function tabbar
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
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
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
})
// end funchion slider

// funchion menu
let preveiwContainer = document.querySelector('.products-preview')
let previewBox = preveiwContainer.querySelectorAll('.preview-card')

document
  .querySelectorAll('.products-container .card-product')
  .forEach((product) => {
    product.onclick = () => {
      preveiwContainer.style.display = 'flex'
      let name = product.getAttribute('data-name')
      previewBox.forEach((preview) => {
        let target = preview.getAttribute('data-target')
        if (name == target) {
          preview.classList.add('active-preview')
        }
      })
    }
  })

previewBox.forEach((close) => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active-preview')
    preveiwContainer.style.display = 'none'
  }
})

preveiwContainer.onclick = (event) => {
  if (event.target.classList.contains('products-preview')) {
    preveiwContainer.style.display = 'none'
    previewBox.forEach((preview) => {
      preview.classList.remove('active-preview')
    })
  }
}

// end funchion menu

function reveal() {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', reveal)
