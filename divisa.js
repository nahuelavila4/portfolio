console.log("hola");

function convertir(){
	// let inicial = document.getElementById("moneda_inicial");
	// let final = document.getElementById("moneda_final");
	let cant = document.getElementById("cantidad").value;
	let cant2 = parseFloat(cant);
	// document.getElementById("asd").innerHTML = `<br>El importe seleccionado es de ${cant2}`;

	let inicial = document.getElementById("moneda_inicial").value;
	let final = document.getElementById("moneda_final").value;

	var resultado = 0;
	// Peso
	// if (inicial == final){
	// 	document.write(cant2+" = "+cant2);
	// }
	if (inicial == 1){
		if (final == 3) resultado = cant2 * 0.0080;
		else if (final == 2) resultado = cant2 * 0.0084;	
	}
	// Dolar
	else if (inicial == 2){
		if (final == 3) resultado = cant2 * 0.95;
		else if (final == 1) resultado = cant2 * 118.44;
	}
	// Euro
	else if (inicial == 3){
		if (final == 1) resultado = cant2 * 125.14;
		else if (final == 2) resultado = cant2 * 1.06;	
	}else{
		resultado = cant2;
	}

	document.getElementById("qwe").innerHTML = "$"+resultado;
}


