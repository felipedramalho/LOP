var segundos,dias,minutos,entrada;
entrada = prompt("Entre com o tempo em minutos: ");

dias = (Math.floor(entrada/1440));
horas = (Math.floor(entrada % 1440)/60);
minutos = (horas % 60);

alert(entrada+" minutos é o equivalente a: "+dias+" dias "+horas+" horas "+minutos+" minutos");
