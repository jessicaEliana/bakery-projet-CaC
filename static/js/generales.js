

// const verScroll = function() {
//     const navbar = document.querySelector('header')
//     const deplegable = document.querySelector('.enlace')
//     if (window.scrollY > 0) {
//       navbar.classList.add('scrolled')
//       deplegable.classList.add('scrolled')
//     } else {
//       navbar.classList.remove('scrolled')
//       deplegable.classList.remove('scrolled')
//     }
// }

// window.addEventListener('scroll', verScroll )


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

// Validación del formulario
const validarFormulario = (evento) => {
    evento.preventDefault();

    // validacion primer nombre
    const primerNombre = document.getElementById('firstname');
    const divErrorPrimerNombre = document.querySelector("#error-firstname");
    divErrorPrimerNombre.innerHTML = "";

    let validation = true;
    let firstInvalidElement = null;

    if (primerNombre.value.trim() === "") {    
        divErrorPrimerNombre.insertAdjacentText("afterbegin", "Por favor, ingresa tu nombre.");
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = primerNombre;
    }

    // validacion del email
    const email = document.getElementById('email');
    const divErrorEmail = document.querySelector("#error-email");
    divErrorEmail.innerHTML = "";

    const emailValue = email.value.trim();
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue === "") {
        divErrorEmail.insertAdjacentText("afterbegin", "Por favor, ingresa tu correo electrónico.");
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = email;
    } else if (!emailRegExp.test(emailValue)) {
        divErrorEmail.insertAdjacentText("afterbegin", "Por favor, ingresa un correo electrónico válido.");
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = email;
    }

    // validacion tipo de producto y producto
    const tipoProducto = document.getElementById('tipoProducto');
    const producto = document.getElementById('producto');

    if (!tipoProducto.value) {
        alert('Por favor, seleccione un tipo de producto.');
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = tipoProducto;
    } else if (!producto.value) {
        alert('Por favor, seleccione un producto específico.');
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = producto;
    }

    // Si hay un elemento no válido, desplazarse hacia él
    if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidElement.focus();
    }

    // Si todas las validaciones pasan, guardar en localStorage
    if (validation) {
        // Obtener datos del formulario
        const formData = {
            firstname: primerNombre.value.trim(),
            lastname: document.getElementById("lastname").value.trim(),
            email: emailValue,
        };

        // Guardar en localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        
        // Redireccionar o hacer cualquier acción adicional
        
        
        document.querySelector(".msj-right").innerHTML = 'Gracias por contactarnos. En breve nos pondremos en contacto contigo.'

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3000);
    }

    return validation;
}

// agregar el listener al formulario
const formularioRegistro = document.querySelector("#formRegister");
formularioRegistro.addEventListener('submit', validarFormulario);
