// Listado de tortas
// const BAKERY_BACKEND = "http://127.0.0.1:5000/tortas";
import { BAKERY_BACKEND } from "./config.js";

const traerProductos = async () => {
    try {
        const resultado = await fetch(`${BAKERY_BACKEND}/products`);
        const data = await resultado.json();

        // Renderizar las tortas
        cargarProductos(data);
        console.log("Success:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

let contenedorTortas = document.querySelector("#contenedor-tortas");

function cargarProductos(tortas) {
    contenedorTortas.innerHTML = '';  // Limpia el contenedor antes de cargar nuevos productos
    if (tortas.length === 0) {
        contenedorTortas.insertAdjacentHTML('beforeend', "<p>No hay productos en el sistema 😮</p>");
        return;
    }
    tortas.forEach(torta => {
        const div = document.createElement("div");
        div.classList.add("image-container");
        div.innerHTML = `
            <p class="image-text">${torta.nombre_prod}</p>
            <img src="${BAKERY_BACKEND}/static/img/${torta.img_url}" alt="${torta.nombre_prod}">
        `;
        contenedorTortas.append(div);
    });
}

// Llamar a la función para traer y renderizar las tortas
traerProductos();
