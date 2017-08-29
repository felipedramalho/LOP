var peso,altura,imc;

peso = parseFloat(prompt("Entre com seu peso em KG: "));
altura = parseFloat(prompt("Entre com sua altura em Metros: "));

imc = (peso/(Math.pow(altura,2)));

if(imc < 18.5){
	alert("Você está abaixo do peso");
}
if(imc >= 18.5 && imc < 25){
	alert("Você está com peso normal");
}
if(imc >= 25 && imc < 30){
	alert("Você está com sobrepeso");
}
if(imc >= 30){
	alert("Você está obeso");
}

//Menor que 18,5: Abaixo do peso; 
//Maior igual 18,5 e menor que 25 : Peso normal; 
//Maior igual 25,0 e menor que 30: Sobrepeso;
//Maior Igual à 30: Obesidade.
