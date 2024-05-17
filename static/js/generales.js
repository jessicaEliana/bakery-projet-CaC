

const verScroll = function() {
    const navbar = document.querySelector('header')
    const deplegable = document.querySelector('.enlace')
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled')
      deplegable.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
      deplegable.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', verScroll )