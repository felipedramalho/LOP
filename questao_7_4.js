var consumo,valor;

consumo = parseFloat(prompt("Entre com o consumo em metros cúbicos: "))

if (consumo < 0) {
	alert("O consumo é incompatível, entre com o valor do consumo");
	consumo = parseFloat(prompt("Entre com o consumo em metros cúbicos: "));
}

if (consumo <= 20){
	valor = (consumo * 8.5);
	alert("O valor da conta mensal de água é: "+valor);
}
else{
	valor = (consumo * 11)
	alert("O valor da conta mensal de água é: "+valor);
}
