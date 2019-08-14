var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;

for (l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  console.log("lineas " + l);
}
/* Tarea de Freddy Vega en Platzi*/

for (l=0; l < lineas; l++)
{
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea("#AAF", xi, 0, 300, yf);
}

for (l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (30 - l);
  dibujarLinea("#AAF", 0, yi, xf, 0);
}

for (l=0; l < lineas; l++)
{
  xi = 10 * l;
  yf = 10 * (30 - l);
  dibujarLinea("#AAF", xi, 300, 300, yf);
}

dibujarLinea("#AFA", 1, 1, 1, 299);
dibujarLinea("#AFA", 1, 300, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); /*Funcion que inicia el dibujo*/
  lienzo.strokeStyle = color; /*atrubuto o propierda del lienzo 2d "d.getContext(2d)"*/
  lienzo.moveTo(xinicial, yinicial); /*Para mover la posicion del lienzo*/
  lienzo.lineTo(xfinal, yfinal); /*Para trazar una linea*/
  lienzo.stroke(); /*Es el hecho de trazar la raya*/
  lienzo.closePath(); /* Funcion que cierra el dibujo*/
}



 