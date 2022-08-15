"use strict";

document.addEventListener("DOMContentLoaded", function () {
  lanzaEvento();
  navegacionFija();
});

function lanzaEvento() {
  var enlaces = document.querySelectorAll(".navegacion-principal a"); //recorremos nuestros enlaces

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      // asignamos un evento  a cada uno
      e.preventDefault(); //el evento e ,seguido de a que le apunta ,sus atribitos href y su valor

      var seccion = document.querySelector(e.target.attributes.href.value);
      seccion.scrollIntoView({
        behavior: "smooth"
      }); //con smoooth hace un recorrido suave,lento
    });
  });
}

function navegacionFija() {
  var barra = document.querySelector(".header"); //registra la observacion

  var observer = new IntersectionObserver(function (entries //con entries me va a dar el elemento a observar
  ) {
    if (entries[0].isIntersecting) {
      barra.classList.remove("fijo");
    } else {
      barra.classList.add("fijo");
    }
  }); //elemento a observar

  observer.observe(document.querySelector(".sobre-festival"));
}