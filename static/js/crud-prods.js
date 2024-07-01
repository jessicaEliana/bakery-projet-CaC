import { BAKERY_BACKEND } from './config.js';
document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();

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

  fetch(`${BAKERY_BACKEND}/products`, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerText = data.message;
    console.log('Success:', data);
  })
  .catch(error => {
    document.getElementById('message').innerText = 'Error al agregar el producto.';
    console.error('Error:', error);
  });
});
