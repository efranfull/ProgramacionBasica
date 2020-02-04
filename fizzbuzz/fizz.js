var numeros = 100;

for(var i = 1; i <= 100; i++)
{
  if(i % 3 == 0)
  {
    document.write("Fizz");
  }
  if (i % 5 == 0) /* aqui podria usar else if y funciona pero, en este
  caso cuando llegara al 15 no me podria FizzBuzz, por ende quitamos
  el else para que el codigo no este encadenado (conectado) y lo vea el if como
  un codigo independiente del if de arriba.*/
  {
    document.write("Buzz");
  }
  else
  {
    document.write(i);
  }
  document.write("<br />");
}
