var raio0,raio1,geatriz,volume,altura,area,perna
raio1 = prompt("Valor do raio maior: ");
raio0 = prompt("Valor do raio menor: ");
altura = prompt("Valor da altura: ");

perna = (raio1-raio0);
geratriz = Math.sqrt(Math.pow(perna,2)+(Math.pow(altura,2)));

area = (3.14159265*geratriz*perna);
volume = (3.14159265*altura*(Math.pow(raio0,2)+(raio0*raio1)+Math.pow(raio1,2))/3);

alert("O volume do tronco de cone é: "+volume+"\n"+"A área do tronco de cone é: "+area);

