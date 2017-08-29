var a,b,c;

a = parseInt(prompt("Entre com o número A:"));
b = parseInt(prompt("Entre com o número B:"));
c = parseInt(prompt("Entre com o número C:"));

if (a > c && b > c){
alert("O menor número é o: "+c);
}

if (a > b && c > b){
alert("O menor número é o: "+b);
}

if (c > a && b > a){
alert("O menor número é o: "+a);
}
