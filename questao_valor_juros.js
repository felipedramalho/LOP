var quantia,montante,rendimento;

quantia = parseFloat(prompt("Entre com a quantia em reais:"));
if (quantia < 1000){
	 rendimento = (0.04 * quantia);
	 montante = (rendimento + quantia);
	 alert("O rendimento foi de "+rendimento+"\n E o montante acumulado é de: "+montante);
}
if(quantia <= 1000 && quantia >= 5000){
	 rendimento = (0.045 * quantia);
	 montante = (rendimento + quantia);
	 alert("O rendimento foi de "+rendimento+"\n E o montante acumulado é de: "+montante);
}
if(quantia > 5000){
	 rendimento = (0.05 * quantia);
	 montante = (rendimento + quantia);
	 alert("O rendimento foi de "+rendimento+"\n E o montante acumulado é de: "+montante);
}
