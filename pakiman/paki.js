var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
/* 1. Otra forma de declarar el Array imagenes de arriba (es parecido)
 lo siguiente: var imagenes = { Cauchin: "vaca.png", etc...}. arriab se crea
 un Array con valores asociativos en vez de numericos dentro de su indice y
 en este ejemplo con llaves ({}),estamos creando un objeto literal usando JON
 JavaScript Object Notation, a nivel de cogido se ejecuta igual. */

// Saque la case de aqui para llevarlo al archivo pakiman.js

/* 3. Para crear una coleecon de pakimanes sin variables que lo indique, podemos
colocar en coleccion los datos de la clase pakiman:
var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);*/

var coleccion = []; //push crea un indice
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

/*4.  for (p in coleccion) es unciclo especial que solo opera por la cantidad
de ojetos dentro del Array. pakin es el nobre la variable que elegi para el
ciclo for. ----> for("nombre de la variable" in coleccion);
Con of en vez de ir me muestra directamente la instacia en vez del indice*/

for(var pakin of coleccion)
{
    pakin.mostrar();
}

/*con in muestra las llaves, pero si pongo of no me muestra nada. Esto sucede
porque no hay un indice real.in intera en el indice y of sobre el objeto.*/
for (var x in imagenes) { console.log(x);}

/* 2. ¿Que pasaria si necesitara 150 pakimanes. Para esto crearemos un Array
var coleccion = []; que esta mas arriba, donde los almacenaremos y asi
poder comentar la funcion mostrar(); para ver los pakimanes.
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
*/
