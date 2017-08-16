var largura,comprimento,sobra,area,tamanho1,tamanho2,quantidade;

tamanho1 = parseInt(prompt = ("Entre com a medida da largura em metros:"))
tamanho2 = parseInt(prompt = ("Entre com a medida da comprimento em metros:"))

largura = (tamanho1 / 0.3)
comprimento (tamanho2 / 0.3)

if ((tamanho1 % 0.3)>0)
{
	largura = ((Math.floor((tamanho1 % 0.3)/0.3) +1)
}

if ((tamanho2 % 0.3)>0)
{
	comprimento = ((Math.floor(tamanho2 % 0.3))/0.3) +1)
}

area = (largura * comprimento)
quantidade = (area / 0.9)



alert ("A quantidade de lajotas necessária é: "+quantidade);
