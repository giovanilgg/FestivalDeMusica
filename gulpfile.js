const {series, src, dest, watch } = require("gulp"); //requiere de gulp"archivo que esta en node-modules"" "src" para buscar la direccion de css
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");

const webP = require("gulp-webp");

//dest es para ver donde se va a almacenar

function css() {
  return src("./src/scss/app.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("./build/css"));

  //retorna va y busca el archivo a traves de un pipe transforma el archivo con sass a css para que el navegador lo detecte
}

function javascript() {
  return src("src/js/**/*.js") //busca todos los archivos javascript
    .pipe(concat("bundle.js")) //usa el metodo concat para unirlos en este archivo
    .pipe(dest("./build/js")); //que va a estar en build js
}

function watchArchivos() {
  watch("./src/scss/**/*.scss", css); //toma el archivo y que tarea se va a ejecutar
  watch("src/js/**/*.js",javascript);
}


exports.css = css; //nombre de la tarea que almacena la funcion a realizar

exports.watchArchivos = watchArchivos;

exports.javascript = javascript;

exports.default= series(javascript,watchArchivos);


