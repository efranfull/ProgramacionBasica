var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
//se coloca solo dibujoPorClick sin () al final porque
//no queremos que dibujoPorClick se ejecute en la linea 3
//solo lo nombramos para que listener sepa que funcion ejecutara.

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); /*Funcion que inicia el dibujo*/
  lienzo.strokeStyle = color; /*atrubuto o propierda del lienzo 2d "d.getContext(2d)"*/
  lienzo.moveTo(xinicial, yinicial); /*Para mover la posicion del lienzo*/
  lienzo.lineTo(xfinal, yfinal); /*Para trazar una linea*/
  lienzo.stroke(); /*Es el hecho de trazar la raya*/
  lienzo.closePath(); /* Funcion que cierra el dibujo*/
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf, xi, yf;
  var espacio = ancho / lineas;

  for (l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    console.log("lineas " + l);
  }
  /* Tarea de Freddy Vega en Platzi*/

  for (l=0; l < lineas; l++)
  {
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea("#AAF", xi, 0, 300, yf);
  }

  // a partir de aqui no funciona las lineas.
  /*for (l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (30 - l);
    dibujarLinea("#AAF", 0, yi, xf, 0);
  }

  for (l=0; l < lineas; l++)
  {
    xi = espacio * l;
    yf = espacio * (30 - l);
    dibujarLinea("#AAF", xi, 300, 300, yf);
  }*/

  dibujarLinea("#AFA", 1, 1, 1, 299);
  dibujarLinea("#AFA", 1, 299, 299, 299);
  dibujarLinea("#AFA", 1, 1, 299, 1);
  dibujarLinea("#AFA", 299, 0, 299, 299);
}