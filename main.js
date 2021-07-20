// abre e fecha o menu no icone//
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em cada item do menu, esconder-o//
const links = document.querySelectorAll('#header ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando ser scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changerHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que o header
    header.classList.add('scroll')
  } else {
    //menor que o header
    header.classList.remove('scroll')
  }
}

//testimonials carousel slider swipwer
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distnace: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contatct .text, #contact .links,
  footer .brand, footer.social
  `,
  { interval: 100 }
)

//botton back to up
const backTuTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backTuTopButton.classList.add('show')
  } else {
    backTuTopButton.classList.remove('show')
  }
}

//mennu ativar  conforme a seção na pagina
const sections = document.querySelectorAll('main section[id]')
function activeteMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//scroll
window.addEventListener('scroll', function () {
  changerHeaderWhenScroll()
  backToTop()
  activeteMenuAtCurrentSection()
})
