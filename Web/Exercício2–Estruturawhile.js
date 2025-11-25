console.log("--- Exercício 2: Soma de Números Positivos (Estrutura while) ---");

const input = require('readline-sync');

let soma = 0;
let numero = 0;

console.log("Digite números inteiros positivos para somar.");
console.log("Para parar e ver o resultado, digite um número negativo.");
console.log("----------------------------------------------------------");

while (numero >= 0) {

    const entrada = input.question("Digite um número: ");
    numero = parseInt(entrada);

    if (numero >= 0) {
        soma += numero; 
        console.log(`Número ${numero} adicionado. Soma atual: ${soma}`);
    }
}

console.log("----------------------------------------------------------");
console.log(`Número negativo digitado. O programa foi encerrado.`);
console.log(`A soma total dos números positivos digitados é: ${soma}`);