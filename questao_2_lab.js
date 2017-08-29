var a,b,c,raiz1,delta,raiz2;

a = parseFloat(prompt("Entre com o coeficiente A:"));
b = parseFloat(prompt("Entre com o coeficiente B:"));
c = parseFloat(prompt("Entre com o coeficiente C:"));

delta = (Math.sqrt((Math.pow(b,2) - 4*a*c)))
raiz1 = ((-1*b + delta)/2*a);
raiz2 = ((-1*b - delta)/2*a);

if(delta > 0){
	raiz1 = ((-1*b + delta)/2*a);
	raiz2 = ((-1*b - delta)/2*a);
	alert("X1 = "+raiz1+" X2 = "+raiz2);
}
if(delta = 0){
		alert("A raiz da equação é "+raiz1);
	}
	
if(delta < 0){
	alert("A equação não possui raizes reais");
}

