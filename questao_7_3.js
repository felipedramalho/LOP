var n = parseInt(prompt("Entre com um número inteiro: "));

if( n % 3 == 0 ){
	alert("O número é divisível por 3");
}
if( n % 4 == 0 ){
	alert("O número é divisível por 4");
}
if( n % 5 == 0 ){
	alert("O número é divisível por 5");
}
if( n % 3 == 0 && n % 4 == 0  ){
	alert("O número é divisível por 3 e 4");
}
if( n % 3 == 0 && n % 5 == 0  ){
	alert("O número é divisível por 3 e 5");
}
if( n % 4 == 0 && n % 5 == 0  ){
	alert("O número é divisível por 4 e 5");
}
if ( n % 3 != 0 &&  n % 4 != 0 &&  n % 5 != 0){
	alert("O número não é divisível por 3, 4 e 5")
}
