//Genera un número aleatorio entre un rango de enteros

function patito(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

var lienzo;

var sheldon = {
	imagenURL: "piedra-papel-tijeras-lagarto-spock.png",
	imagenOK: false

}
var piedra = 0;
var papel = 1;
var tijera = 2;
var spock = 3;
var lagarto = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Spock", "Lagarto"];

var opcionUsuario;
var opcionMaquina = patito(0,4);

function inicio ()
{
	var canvas = document.getElementById("fondo")
	lienzo = canvas.getContext("2d");

	sheldon.imagen = new Image();
	sheldon.imagen.src = sheldon.imagenURL;
	sheldon.imagen.onload = confirmarSheldon;
}

function confirmarSheldon()
{
	sheldon.imagenOK = true
	dibujar();
}


function dibujar()
{
	if(sheldon.imagenOK == true)
	{
		lienzo.drawImage(sheldon.imagen, 0, 0);
	}
}

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nSpock : 3\nLagarto : 4", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);


if (opcionUsuario == piedra)
{
	
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste :(");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == spock) 
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Ganaste");
	}
}
else if(opcionUsuario == papel)
{
	
	if(opcionMaquina == piedra)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == spock)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Perdiste");
	}
}
else if(opcionUsuario == tijera)
{
	
		if(opcionMaquina == piedra)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate");
	}
	else if(opcionMaquina == spock)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Ganaste");
	}
}
else if(opcionUsuario == spock)
{
	 if(opcionMaquina == piedra)
	 {
	 	alert("Ganaste");
	 }
	 else if(opcionMaquina == papel)
	 {
	 	alert("Perdiste");
	 }
	 else if(opcionMaquina == tijera)
	 {
	 	alert("Ganaste");
	 }
	 else if(opcionMaquina == spock)
	 {
	 	alert("Empate");
	 }
	 else if(opcionMaquina == lagarto)
	 {
	 	alert("Perdiste");
	 }
}
else if(opcionUsuario == lagarto)
{
	if(opcionMaquina == piedra)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == spock)
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == lagarto)
	{
		alert("Empate");
	}
}
else
{
    alert("¿Que paso?");
}


