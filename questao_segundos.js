var segundos,dias,minutos;
segundos = prompt("Entre com o tempo em segundos: ");

dias = (Math.floor(segundos/216000));
horas = (segundos % 216000)/3600;
minutos = (horas % 3600)/60;

alert(segundos+" segundos é o equivalente a: "+dias+" dias "+horas+" horas"+minutos+" minutos");
