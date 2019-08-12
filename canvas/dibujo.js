var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath(); /*Funcion que inicia el dibujo*/
lienzo.strokeStyle = "blue"; /*atrubuto o propierda del lienzo 2d "d.getContext(2d)"*/
lienzo.moveTo(50, 10); /*Para mover la posicion del lienzo*/
lienzo.lineTo(250, 2); /*Para trazar una linea*/
lienzo.stroke(); /*Es el hecho de trazar la raya*/
lienzo.closePath(); /* Funcion que cierra el dibujo*/

/* Para hacer una segunda linea*/

lienzo.beginPath(); /*Funcion que inicia el dibujo*/
lienzo.strokeStyle = "red"; /*atrubuto o propierda del lienzo 2d "d.getContext(2d)"*/
lienzo.moveTo(180, 10); /*Para mover la posicion del lienzo*/
lienzo.lineTo(290, 200); /*Para trazar una linea*/
lienzo.stroke(); /*Es el hecho de trazar la raya*/
lienzo.closePath(); /* Funcion que cierra el dibujo*/



 