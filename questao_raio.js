var raio,volume,area,comprimento;

raio = prompt("Entre com o raio: ");

comprimento = (3.14*2*raio);
volume = ((4*3.14*(Math.pow(raio,3)))/3);
area = (3.14*(Math.pow(raio,2)));

alert("A partir do raio "+raio+";"+"\n"+"O comprimento é: "+comprimento+"\n"+"A área é: "+area+"\n"+"O volume da esfera é: "+volume);
