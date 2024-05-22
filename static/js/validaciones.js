

const validarFormulario= (evento) => {
    evento.preventDefault()
    
    const primerNombre = document.getElementById("firstname")
    const divErrorPrimerNombre = document.querySelector("#error-firstname")

    divErrorPrimerNombre.innerHTML = ""
    
    let validation = true
    let firstInvalidElement = null;
    if (primerNombre.value === "") {    
        divErrorPrimerNombre.insertAdjacentText("afterbegin","Por favor, ingresa tu nombre.")
        validation = false
        if (!firstInvalidElement) firstInvalidElement = primerNombre;
    }

    // valizacion del apellido
    const apellido = document.getElementById("lastname");
    const divErrorApellido = document.querySelector("#error-lastname");
    divErrorApellido.innerHTML = "";
    
    if (!apellido.value) {
        divErrorApellido.insertAdjacentText("afterbegin", "Por favor, ingresa tu apellido.");
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = apellido;
    }


    // Validacion de correo
    const email = document.getElementById("email");
    const divErrorEmail = document.querySelector("#error-email");
    divErrorEmail.innerHTML = "";
    
    if (!email.value) {
        divErrorEmail.insertAdjacentText("afterbegin", "Por favor, ingresa tu correo electrónico.");
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = email;
    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        divErrorEmail.insertAdjacentText("afterbegin", "Por favor, ingresa un correo electrónico válido.");
        validation = false;
        if (!firstInvalidElement) firstInvalidElement = email;
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
            firstname: primerNombre.value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
        }

        // Guardar en localStorage
        localStorage.setItem('formData', JSON.stringify(formData))
        
        // Redireccionar o hacer cualquier acción adicional
        window.location.href = '../index.html'
    }

    return validation;
}

// agregar el listener al formulario

const formularioRegistro = document.querySelector("#formRegister")
formularioRegistro.addEventListener('submit',validarFormulario)