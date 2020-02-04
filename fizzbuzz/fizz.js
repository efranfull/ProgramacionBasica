var numeros = 100;
//Caso 1 para mostrar el FizzBuzz en lo numero devisibles entre 3 y 5.

var divisible = false;


for(var i = 1; i <= 100; i++)
{
  divisible = false;  // agregado caso 1
  if(i % 3 == 0)
  {
    document.write("Fizz");
    divisible = true;   // agregado caso 1
  }
  if (i % 5 == 0) /* aqui podria usar else if y funciona pero, en este
  caso cuando llegara al 15 no me podria FizzBuzz, por ende quitamos
  el else para que el codigo no este encadenado (conectado) y lo vea el if como
  un codigo independiente del if de arriba.*/
  {
    document.write("Buzz");
    divisible = true;   //agregado caso 1
  }
  if(!divisible) // ! = Sino es divisible
  {
    document.write(i);
  }
  document.write("<br />");
}
