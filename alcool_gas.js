var gas,etanol,preco

gas = prompt("Entre com o preço da Gasolina: ");
etanol = prompt("Entre com o preço do Etanol: ");

if(etanol > 0.7*gas)
{
	alert("Utilize a Gasolina")
}
else
{
	alert("Utilize o Etanol")
}

