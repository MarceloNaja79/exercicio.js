const prompt = require('prompt-sync')({sigint: true});

console.log("--- Estações do Ano ---");

const entrada = prompt("Digite um número de 1 a 4 (1-Primavera, 2-Verão, 3-Outono, 4-Inverno): ");
const numero = parseInt(entrada);

let estacao = "";

switch (numero) {
    case 1:
        estacao = "Primavera";
        break;
    case 2:
        estacao = "Verão";
        break;
    case 3:
        estacao = "Outono";
        break;
    case 4:
        estacao = "Inverno";
        break;
    default:
        estacao = "Valor fora da faixa!";
        break;
}

console.log(estacao);