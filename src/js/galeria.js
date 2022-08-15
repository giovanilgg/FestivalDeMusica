document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes"); //SELECCIONAMOS NUESTRA CLASE
  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("IMG");
    imagen.dataset.imagenId = i; //con dataset creamos un atributo para manipular la imagen
    imagen.onclick = mostrarImagen; //detectamos un evento y ejecutamos el metodo
    // ("CREAMOS EL ELEMENTO IMAGEN");
    imagen.src = `src/img/thumb/${i}.jpg`; //buscamos las imagenes gg
    const lista = document.createElement("LI");
    lista.appendChild(imagen);
    galeria.appendChild(lista);
  }
}
function mostrarImagen(e) {
  //psamos el evento como parametro
  const id = parseInt(e.target.dataset.imagenId); //tranformamos a entero nuestra cadena para detectar la imagen
  //Generar la imagen
  const imagen = document.createElement("IMG"); // creamos un elemnto de tipo imagen
  imagen.classList.add("imagen");
  imagen.src = `src/img/grande/${id}.jpg`; // buscamos la imagen
  const overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");

  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
  //boton para cerrar imagen
  const cerrarImagen = document.createElement("P");
  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("btn-cerrar");
  overlay.appendChild(cerrarImagen);
  //cerra imagen con una funcion anonima
  cerrarImagen.onclick = function () {
    overlay.remove();
  };
}
