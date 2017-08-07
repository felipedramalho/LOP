var horas,dias,quantidade;
horas = prompt("Entre com um número horas: ");

dias = (Math.floor(horas/24));
resto = (horas % 24);

alert(horas+" horas é o equivalente a: "+dias+" dias "+resto+" horas");

