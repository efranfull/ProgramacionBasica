// require: Trae la librería express del npm.
var cafecito = require("express");
// Se invoca la función (de la variable express) y se almacena en la variable app.
var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado);
{
  resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado);
{
  resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);
