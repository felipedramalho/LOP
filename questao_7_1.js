var n,square,root; 

n = parseFloat(prompt("Entre com um número real: "));

if (n < 0){
	square = (Math.pow(n,2))
	alert("O quadrado do número é: "+square);
}
else{
	root = (Math.sqrt(n))
	alert("A raiz quadrada do número é: "+root);
}
