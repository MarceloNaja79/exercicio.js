console.log("--- Exercicio for Tabuadas ---");

const input = require('readline-sync');

let apcao = Number(input.question("Digite um numero da Tabuada que Deseja de 1 a 10: "));

const N = apcao;

if (isNaN(N) || N < 1 || N > 10) {
    console.log("Entrada inválida. Por favor, digite um número inteiro entre 1 e 10.");
} else {
    console.log(`Tabuada do ${N}:`);
    console.log("--------------------------------");

    for (let i = 1; i <= 10; i++) {
        const resultado = N * i;
        console.log(`${N} x ${i} = ${resultado}`);
    }
}