

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

// menu alternativo

// BOTON MENUS

document.getElementById('btnProductos').addEventListener('click', function() {
  var submenu = document.getElementById('submenu');
  if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
  } else {
      submenu.style.display = 'block';
  }
});

document.addEventListener('click', function(event) {
  var isClickInsideMenu = document.getElementById('menu').contains(event.target);
  var isClickInsideSubmenu = document.getElementById('submenu').contains(event.target);

  if (!isClickInsideMenu && !isClickInsideSubmenu) {
      document.getElementById('submenu').style.display = 'none';
  }
});