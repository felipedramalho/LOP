var ano;

ano = parseInt(prompt("Entre com o número correspondente ao ano: "));

if(ano % 400 == 0){
	alert("O ano é bissexto");	
	}
	else if (ano % 4 == 0 && ano % 100 != 0){
	 alert("O ano é bissexto");	
}else{
	alert("O ano não é bissexto");
}

//multiplos de 4
//não sao multiplos de 100,exceto os multiplos de 400
