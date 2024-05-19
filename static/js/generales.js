

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

// onclick 

document.getElementById('icon-home').onclick = function() {
  document.getElementById('first-section').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('icon-menu').onclick = function() {
  document.getElementById('section-prods').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('icon-contact').onclick = function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};