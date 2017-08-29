var capital,juros,tempo,montante,taxa;

capital = parseFloat(prompt("Entre com o valor da aplicação"));
tempo = parseInt(prompt("Entre com o tempo em anos"));
juros = parseFloat(prompt("Entre com a taxa de juros em porcentagem"));

taxa = (juros / 100)

montante = (capital * Math.pow((1 + taxa),tempo));

alert("O montante acumulado após "+tempo+" será de: "+montante);
