"use strict"

/* Hacer un contador para indicar cuantas respodio correctamente 										X 		*/

/* Ordenar segun los hechos historicos, Multiple seleccion de por ejemplo varias imagenes 				X		*/

/* Cuando se termine mostrar junto a las preguntas la justificacion de la respuesta						X	 	*/

/* Arreglar botones 																					X		*/

/* cambiar los boton por btn 																			X		*/

/* Ver mouse hover 																								*/

var botonSubmit = document.querySelector("#enviar");

var res2 = document.getElementById('res23');
var res3 = document.getElementById('res33');
var res4 = document.getElementById('res42');
var res5 = document.getElementById('res51');

var pregCorrect = document.getElementById('correct');
var Incompleto = document.getElementById('Incom');
var MaloBien1 = document.getElementById('MoB1');
var fechaCorrecta = document.getElementById('fecCorrect');

var sele = document.getElementById('resPre1');

var botonres2 = document.querySelectorAll(".resPre2");
var botonres3 = document.querySelectorAll(".resPre3");
var botonres4 = document.querySelectorAll(".resPre4");
var botonres5 = document.querySelectorAll(".resPre5");
var Preg = document.querySelectorAll(".pregunta");

var NumCorrect = 0;
var RespCorrect;

/* Carga la pagina */

window.onload = function(){
	Preg.forEach(preg => {
		preg.style.display = "none";
	});
	botonSigui.style.display = "none";
	botonAtra.style.display = "none";
	botonSubmit.style.display = "none";
	botonRepe.style.display = "none";
	botonres2.forEach( btn => {
			btn.style.backgroundColor = "white";
	});
	botonres3.forEach( btn => {
			btn.style.backgroundColor = "white";
	});
	botonres4.forEach( btn => {
			btn.style.backgroundColor = "white";
	});
	botonres5.forEach( btn => {
			btn.style.backgroundColor = "white";
	});
};

/* Fin carga de pagina */

/* Forma correcta e incorrecta */

function obtenerResultado(evento){
			evento.preventDefault();
			RespCorrect = 0;

			botonres2.forEach(btn => {
				if(btn.style.backgroundColor != "goldenrod")
				{
					RespCorrect++;
				}
			});

			botonres3.forEach(btn => {
				if(btn.style.backgroundColor != "goldenrod")
				{
					RespCorrect++;
				}
			});

			botonres4.forEach(btn => {
				if(btn.style.backgroundColor != "goldenrod")
				{
					RespCorrect++;
				}
			});

			botonres5.forEach(btn => {
				if(btn.style.backgroundColor != "goldenrod")
				{
					RespCorrect++;
				}
			});

			if(RespCorrect >= 13)
			{
				Incompleto.innerHTML = "Responda todas las preguntas";
			}else
			{

			if(sele.value == 3)
			{
				NumCorrect++;
				MaloBien1.innerHTML = "✔";
				MaloBien1.style.color = "#00BB2D";
			}else{
				MaloBien1.innerHTML = "X";
				fechaCorrecta.innerHTML = "Fecha correcta: 1789";
			}

			botonres2.forEach(btn => {
				if(btn.style.backgroundColor == "goldenrod")
					{
						btn.style.backgroundColor = "darkred";
					}
					btn.style.cursor = "not-allowed";
					btn.style.pointerEvents = "none";
			});
			botonres3.forEach(btn => {
				if(btn.style.backgroundColor == "goldenrod")
					{
						btn.style.backgroundColor = "darkred";
					}
					btn.style.cursor = "not-allowed";
					btn.style.pointerEvents = "none";
			});
			botonres4.forEach(btn => {
				if(btn.style.backgroundColor == "goldenrod")
					{
						btn.style.backgroundColor = "darkred";
					}
					btn.style.cursor = "not-allowed";
					btn.style.pointerEvents = "none";
			});
			botonres5.forEach(btn => {
				if(btn.style.backgroundColor == "goldenrod")
					{
						btn.style.backgroundColor = "darkred";
					}
					btn.style.cursor = "not-allowed";
					btn.style.pointerEvents = "none";
			});


			res2.style.backgroundColor = "forestgreen";
			res3.style.backgroundColor = "forestgreen";
			res4.style.backgroundColor = "forestgreen";
			res5.style.backgroundColor = "forestgreen";

			

			botonres2.forEach(btn => {
				if(btn.style.backgroundColor == "darkred")
				{
					NumCorrect--;
				}
				if(btn.style.backgroundColor == "forestgreen")
				{
					NumCorrect++;
				}
			});

			botonres3.forEach(btn => {
				if(btn.style.backgroundColor == "darkred")
				{
					NumCorrect--;
				}
				if(btn.style.backgroundColor == "forestgreen")
				{
					NumCorrect++;
				}
			});

			botonres4.forEach(btn => {
				if(btn.style.backgroundColor == "darkred")
				{
					NumCorrect--;
				}
				if(btn.style.backgroundColor == "forestgreen")
				{
					NumCorrect++;
				}
			});

			botonres5.forEach(btn => {
				if(btn.style.backgroundColor == "darkred")
				{
					NumCorrect--;
				}
				if(btn.style.backgroundColor == "forestgreen")
				{
					NumCorrect++;
				}
			});

			if(NumCorrect == 1)
			{
				pregCorrect.innerHTML = "Respondiste " + NumCorrect + " pregunta correctamente";
			}else{
				pregCorrect.innerHTML = "Respondiste " + NumCorrect + " preguntas correctamente";
			}
			
			Incompleto.innerHTML = "";

			botonRepe.style.display = "block";
			this.style.pointerEvents = "none";
			this.style.display = "none";
	}		
}

var cambiaColor2 = function (evento){
	if (this.style.backgroundColor == "white")
	{	
		botonres2.forEach( btn => {
			btn.style.backgroundColor = "white";
			btn.style.boxShadow = "";
		});
		this.style.backgroundColor = "goldenrod"; 
		this.style.boxShadow = "2px 2px 5px gray";
	}
}

var cambiaColor3 = function (evento){
	if (this.style.backgroundColor == "white")
	{	
		botonres3.forEach( btn => {
			btn.style.backgroundColor = "white";
			btn.style.boxShadow = "";
		});
		this.style.backgroundColor = "goldenrod"; 
		this.style.boxShadow = "2px 2px 5px gray";
	}
}

var cambiaColor4 = function (evento){
	if (this.style.backgroundColor == "white")
	{	
		botonres4.forEach( btn => {
			btn.style.backgroundColor = "white";
			btn.style.boxShadow = "";
		});
		this.style.backgroundColor = "goldenrod"; 
		this.style.boxShadow = "2px 2px 5px gray";
	}
}

var cambiaColor5 = function (evento){
	if (this.style.backgroundColor == "white")
	{	
		botonres5.forEach( btn => {
			btn.style.backgroundColor = "white";
			btn.style.boxShadow = "";
		});
		this.style.backgroundColor = "goldenrod"; 
		this.style.boxShadow = "2px 2px 5px gray";
	}
}

botonSubmit.addEventListener("click",obtenerResultado);

botonres2.forEach( btn => {
	btn.addEventListener("click",cambiaColor2);
});

botonres3.forEach( btn => {
	btn.addEventListener("click",cambiaColor3);
});

botonres4.forEach( btn => {
	btn.addEventListener("click",cambiaColor4);
});

botonres5.forEach( btn => {
	btn.addEventListener("click",cambiaColor5);
});

/* Fin incorrecto o correcto */

/* Botones Atras, Siguiente, Empezar y Reiniciar */

var botonSigui = document.getElementById('sigui');
var botonAtra = document.getElementById('atra');
var botonEmpe = document.getElementById('empe');
var botonRepe = document.getElementById('repe');
var introduc = document.getElementById('introduc');
var i = 1,f;

function Siguiente(evento){ 
	while((i <= Preg.length) && (f!=0))
	{
		
		Preg[i-1].style.display = "none";
		Preg[i].style.display = "block";
		i++;
		f=0;
		
	}
	if(i >= Preg.length)
	{
		this.style.display = "none";
		if(botonSubmit.style.pointerEvents == "none")
		{
			botonSubmit.style.display = "none";
			botonRepe.style.display = "block";
		}else 
		{
			botonSubmit.style.display = "block";
		}
		i=Preg.length;
	}else{
		botonAtra.style.display = "block";
	}
	f=1;
}

function Anterior(evento){

	while((i <= Preg.length) && (f!=0))
	{
		i--;
		if(i <= 1)
		{
			this.style.display = "none";
			i=1;
		}else{
			botonSigui.style.display = "block";
			botonSubmit.style.display = "none";
			botonRepe.style.display = "none";
		}
		Preg[i-1].style.display = "block";
		Preg[i].style.display = "none";
		f=0;

	}
	f=1;
}

function Empezar(evento){
	Preg[0].style.display = "block";
	this.style.display = "none";
	botonSigui.style.display = "block";
	introduc.style.display = "none";
}

function Reiniciar(evento){
	location.reload();
	botonSubmit.style.display = "none";
}

botonSigui.addEventListener("click",Siguiente);
botonAtra.addEventListener("click",Anterior);
botonEmpe.addEventListener("click",Empezar);
botonRepe.addEventListener("click",Reiniciar);
