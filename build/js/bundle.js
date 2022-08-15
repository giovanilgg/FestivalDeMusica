document.addEventListener("DOMContentLoaded", function () {
  lanzaEvento();
  navegacionFija();
});
function lanzaEvento() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");
  //recorremos nuestros enlaces
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      // asignamos un evento  a cada uno
      e.preventDefault();
      //el evento e ,seguido de a que le apunta ,sus atribitos href y su valor
      const seccion = document.querySelector(e.target.attributes.href.value);

      seccion.scrollIntoView({ behavior: "smooth" }); //con smoooth hace un recorrido suave,lento
    });
  });
}
function navegacionFija() {
  const barra = document.querySelector(".header");
  //resgistra la observacion
  const observer = new IntersectionObserver(function (
    entries //con entries me va a dar el elemento a observar
  ) {
    if (entries[0].isIntersecting) {
      barra.classList.remove("fijo");
    } else {
      barra.classList.add("fijo");
    }
  });
  //elemento a observar
  observer.observe(document.querySelector(".sobre-festival"));
}

document.addEventListener("DOMContentLoaded", function () {
  //para cargar lo que hay en el html

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
  body.classList.add('fijar-body');
  //boton para cerrar imagen
  const cerrarImagen = document.createElement('P');
  cerrarImagen.textContent = 'X';
  cerrarImagen.classList.add('btn-cerrar');
  overlay.appendChild(cerrarImagen);
  //cerra imagen con una funcion anonima
  cerrarImagen.onclick= function(){

    overlay.remove();
  }
}
