const contenedorTortas = document.querySelector("#contenedor-tortas");

function cargarTortas (tortas){
    tortas.forEach(torta => {
        const div = document.createElement("div");
        div.classList.add("image-container");
        div.innerHTML=`
        <p class="image-text">${torta.nombre}</p>
        <img src="../static/img/imagesproductos/Tortas/${torta.id}.jpg" alt="${torta.nombre}">
    
    `
    contenedorTortas.append(div);
    });
    
}
cargarTortas(tortas);