var teclas =
{
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var lienzo = cuadrito.getContext("2d");
var x = 100;
var y = 100; 

/*dibujarLinea ("red", 149, 149, 151, 151); 
para hacer el punto rojo mas dinamico segun Freddy:*/
dibujarLinea ("red", x-1, y-1, x+1, y+1);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); /*Funcion que inicia el dibujo*/
  lienzo.strokeStyle = color; /*atrubuto o propierda del lienzo 2d "d.getContext(2d)"*/
  lienzo.lineWidth = 3; // grueso de la linea.
  lienzo.moveTo(xinicial, yinicial); /*Para mover la posicion del lienzo*/
  lienzo.lineTo(xfinal, yfinal); /*Para trazar una linea*/
  lienzo.stroke(); /*Es el hecho de trazar la raya*/
  lienzo.closePath(); /* Funcion que cierra el dibujo*/
}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y);
      x = x + movimiento;
      break;

    default: // Esto es igual a decir, sino se cumple el case entonces...
        alert("Solo presione las flechas");
      break; // Este break no es necesario solo por se puriste se coloco
  }

}
