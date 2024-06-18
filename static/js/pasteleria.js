const contenedorPasteles = document.querySelector("#contenedor-productos");


function cargarPasteles(pasteles){
    pasteles.forEach(pastel => {
        const div = document.createElement("div");
        var valorNumerico = Number(pastel.id)
        if (valorNumerico % 2 == 0){
            div.classList.add("producto","img-der");
            div.innerHTML=`
            <div class="info descripcion-pasteleria">
            <div class="nombre-producto">${pastel.nombre}</div>
            <div class="descripcion"></div>
            </div>
            <img src="../static/img/imagesproductos/Pasteleria/${pastel.id}.png" alt="Producto 1">
        `  
        }else{
            div.classList.add("producto","img-izq")
            div.innerHTML=`
                <img src="../static/img/imagesproductos/Pasteleria/${pastel.id}.png" alt="Producto 1">
                <div class="info text-der descripcion-pasteleria">
                    <div class="nombre-producto">${pastel.nombre}</div>
                    <div class="descripcion"></div>
                </div>
            `
        }
        
        contenedorPasteles.append(div);
    });
}
cargarPasteles(pasteles)