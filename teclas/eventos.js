var teclas =
{
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{

  switch (evento.keyCode)
  {
    case teclas.UP:
      console.log("Arriba");
      break;

    case teclas.DOWN:
      console.log("Abajo");
      break;

    case teclas.LEFT:
      console.log("Izquiera");
      break;

    case teclas.RIGHT:
      console.log("Derecha");
      break;

    default: // Esto es igual a decir, sino se cumple el case entonces...
        console.log("Otra tecla");
      break; // Este break no es necesario solo por se puriste se coloco
  }

}
