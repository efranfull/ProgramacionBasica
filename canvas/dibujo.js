var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); /*Funcion que inicia el dibujo*/
  lienzo.strokeStyle = color; /*atrubuto o propierda del lienzo 2d "d.getContext(2d)"*/
  lienzo.moveTo(xinicial, yinicial); /*Para mover la posicion del lienzo*/
  lienzo.lineTo(xfinal, yfinal); /*Para trazar una linea*/
  lienzo.stroke(); /*Es el hecho de trazar la raya*/
  lienzo.closePath(); /* Funcion que cierra el dibujo*/
}



 