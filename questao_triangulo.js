var a,b,c;

a = parseInt(prompt("Entre com o lado A:"));
b = parseInt(prompt("Entre com o lado B:"));
c = parseInt(prompt("Entre com o lado C:"));

if(a < (b + c) && b < (a + c) && c < (b + a)){
	if(Math.pow(a,2) == (Math.pow(b,2) + Math.pow(c,2)) || 
	   Math.pow(b,2) == (Math.pow(a,2) + Math.pow(c,2)) ||
	   Math.pow(c,2) == (Math.pow(b,2) + Math.pow(a,2))){
		alert("O triangulo é retângulo");
	} else {
		if(a == b && a == c && b == c){
			alert("O triangulo é equilátero");
		} 
		if((a == b) || (b == c) || (c == a)){
			alert("O triangulo é isósceles");
		}
		if((a != b) && (b != c) && (c != a)){
			alert("O triangulo é escaleno");
		}
	}
}else{
	alert("As medidas não formam triangulos")
}

