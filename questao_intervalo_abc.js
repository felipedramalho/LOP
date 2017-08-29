var a,b,c;

a = parseFloat(prompt("Entre com o número A:"));
b = parseFloat(prompt("Entre com o número B:"));
c = parseFloat(prompt("Entre com o número C:"));

if(b > a){
	if(b >= c && c >= a){
	alert("O número C está entre [B,A]");
	}

if(a > b){
	if(a >= c && c >= b){
	alert("O número C está entre [A,B]");
		}
	}
}
if((c > a && c > b) || (c < a && c < b)){
	alert("O número C está fora do intervalo [A,B] e [B,A]");
}
