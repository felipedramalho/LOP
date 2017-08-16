var nota1,nota2,faltas,reposicao;

do {
	nota1 = prompt("Entre com a nota 1: ");
	nota2 = prompt("Entre com a nota 2: ");
} while (nota1 == null || nota2 == "" || nota2 == null || nota1 == "");

media = ((1*nota1 + 1*nota2)/2)
alert ("A média parcial é de: "+media);

faltas = prompt("Entre com as faltas: ");

if (faltas > 90/4)
{
	alert("O aluno foi reprovado por faltas");
	end;
}
if ((media)<3)
{
	alert ("O aluno foi reprovado por nota");
	end;
}
if ((media)>=5)
{
	alert ("O aluno foi aprovado por nota");
	end;
}
if ((media)<=5&&(media)>3)
{
	alert ("O aluno deve fazer a prova de reposição");
	reposicao = prompt("Entre com a nota da reposição: ");
}
if (((1*media + 1*reposicao)/2)>=5)
{
	alert ("O aluno foi aprovado por nota");
	end;
}
else
{
	alert("O aluno foi reprovado por nota");
	end;
}
