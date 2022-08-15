"use strict";

document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  var galeria = document.querySelector(".galeria-imagenes"); //SELECCIONAMOS NUESTRA CLASE

  for (var i = 1; i <= 12; i++) {
    var imagen = document.createElement("IMG");
    imagen.dataset.imagenId = i; //con dataset creamos un atributo para manipular la imagen

    imagen.onclick = mostrarImagen; //detectamos un evento y ejecutamos el metodo
    // ("CREAMOS EL ELEMENTO IMAGEN");

    imagen.src = "src/img/thumb/".concat(i, ".jpg"); //buscamos las imagenes gg

    var lista = document.createElement("LI");
    lista.appendChild(imagen);
    galeria.appendChild(lista);
  }
}

function mostrarImagen(e) {
  //pasamos el evento como parametro
  var id = parseInt(e.target.dataset.imagenId); //tranformamos a entero nuestra cadena para detectar la imagen
  //Generar la imagen

  var imagen = document.createElement("IMG"); // creamos un elemnto de tipo imagen

  imagen.classList.add("imagen");
  imagen.src = "src/img/grande/".concat(id, ".jpg"); // buscamos la imagen

  var overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  var body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body"); //boton para cerrar imagen

  var cerrarImagen = document.createElement("P");
  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("btn-cerrar");
  overlay.appendChild(cerrarImagen); //cerra imagen con una funcion anonima

  cerrarImagen.onclick = function () {
    overlay.remove();
  };
}
