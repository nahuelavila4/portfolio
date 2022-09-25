console.log("gojdf");
const cone = document.getElementById("conv"),
  mostrar = document.querySelector(".mostrar");

cone.addEventListener("click", restar);

function restar() {
  let numero = document.getElementById("normal").value;
  let rom = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let resultado = [];
  for (n in rom) {
    while (rom[n] <= numero) {
      numero -= rom[n];
      //console.log(n);
      resultado.push(n);
    }
  }
  //console.log(resultado.join(""));
  mostrar.innerText = resultado.join("");
}

// ----------------------------------------
//Cifrado Cesar
/*
let abec = [
	"a", "b", "c", "d", "e",
	"f", "g", "h", "i", "j",
	"k", "l", "m", "n", "ñ",
	"o", "p", "q", "r", "s",
	"t", "u", "v", "w", "x",
	"y", "z"
]

function cesar(str){
	let res = [];
	console.log(d);
	for(let y = 0; y < str.length; y++){
		
	}
	console.log(res);
}

cesar("zxcn");
*/
