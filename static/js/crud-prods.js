import { BAKERY_BACKEND } from './config.js';

document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const productId = document.getElementById('productId').value; // Otener el ID del producto (si esta en modo edición)
  const nombre_prod = document.getElementById('nombre_prod').value;
  const precio_prod = document.getElementById('precio_prod').value;
  const stock_prod = document.getElementById('stock_prod').value;
  const descripcion_p = document.getElementById('descripcion_p').value;

  const imagen = document.getElementById('imagenProd').files[0];
  console.log("Datos del producto:", {nombre_prod, precio_prod, stock_prod, descripcion_p, imagen});
  console.log("IMAGEN", imagen, "TIPO: ", typeof(imagen));

  let formData = new FormData();
  formData.append('nombre_prod', nombre_prod);
  formData.append('precio_prod', precio_prod);
  formData.append('stock_prod', stock_prod);
  formData.append('descripcion_p', descripcion_p);
  formData.append('imagen', imagen);

  let url = `${BAKERY_BACKEND}/products`;
  let method = 'POST';

  if (productId) {
    // Si hay un ID de producto, es un método de edición
    url += `/${productId}`;
    method = 'PUT'; // Usar el método PUT para actualizar el producto existente
  }

  fetch(url, {
    method: method,
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerText = data.message;
    loadProducts(); // Recarga la lista de productos despues de agregar uno
  })
  .catch(error => {
    document.getElementById('message').innerText = 'Error al agregar el producto.';
    console.error('Error:', error);
  });
});

function loadProducts() {
  fetch(`${BAKERY_BACKEND}/products`)
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpia la lista de productos

    data.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${product.nombre_prod}($${product.precio_prod})</span>
        <div>
          <button onclick="editProduct(${product.id_prod})">Editar</button>
          <button onclick="deleteProduct(${product.id_prod})">Eliminar</button>
        </div>
      `;

      // <h3>${product.nombre_prod}</h3>
      // <p>Precio: $${product.precio_prod}</p>
      // <p>Stock: ${product.stock_prod}</p>
      // <p>Descripción: ${product.descripcion_p}</p>
      // <img src="${BAKERY_BACKEND}/static/img/${product.img_url}" alt="${product.nombre_prod}">

      productList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos: ', error);
  });
}

window.deleteProduct = function(id) {
  fetch(`${BAKERY_BACKEND}/products/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerText = data.message;
    loadProducts(); // Recarga la lista de productos despues de borrar uno
  })
  .catch(error => {
    document.getElementById('message').innerText = 'Error al borrar el producto.';
    console.error('Error:', error);
  });
};

// Usar función flecha para editar el producto y asignarlo al objecto window
window.editProduct = function(id) {
  // Obtener el producto por su ID y cargar los datos en el formulario
  fetch(`${BAKERY_BACKEND}/products/${id}`)
  .then(response => response.json())
  .then(product => {
    // llenar el formulario con los datos del producto
    document.getElementById('productId').value = product.id_prod;
    document.getElementById('nombre_prod').value = product.nombre_prod;
    document.getElementById('precio_prod').value = product.precio_prod;  
    document.getElementById('stock_prod').value = product.stock_prod;
    document.getElementById('descripcion_p').value = product.descripcion_p;

    document.getElementById('btnsave').innerText = 'Guardar Cambios';
  })
  .catch(error => {
    console.error('Error al obtener el producto para editar:', error);
  });
};

// Función para limpiar el formulario despues de guardar cambios o cancelar
const clearForm = () => {
  document.getElementById('productId').value = '';
  document.getElementById('nombre_prod').value = '';
  document.getElementById('precio_prod').value = '';
  document.getElementById('stock_prod').value = '';
  document.getElementById('descripcion_p').value = '';

  // Restaurar el texto original del botón submit
  document.querySelector('btnsave').value = 'Agregar Producto';
};

// Cancelar la edición y limpiar el formulario al hacer clic en el botón Cancelar
document.getElementById('cancelEdit').addEventListener('click', clearForm);

// Cargar los productos cuando la página se cargue por primera vez
document.addEventListener('DOMContentLoaded', loadProducts);
