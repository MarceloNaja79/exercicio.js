console.log("--- Exercício 3: Média de Números Positivos (Estrutura do...while) ---");

const input = require("readline-sync");

let soma = 0;
let contador = 0;
let numero;

console.log("Digite números inteiros positivos para calcular a média.");
console.log("Digite 0 para finalizar e ver o resultado.");
console.log("----------------------------------------------------------");

do {
    // Pede ao usuário para digitar um número
    const entrada = input.question("Digite um número (0 para finalizar): ");
    numero = parseInt(entrada);

    // Verifica se o número é válido e não é o 0 de parada
    if (!isNaN(numero) && numero !== 0) {
        soma += numero;
        contador++;
        console.log(`Número ${numero} adicionado. Soma atual: ${soma}, Quantidade: ${contador}`);
    } else if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, digite um número inteiro.");
    }

} while (numero !== 0);

console.log("----------------------------------------------------------");
console.log("Entrada finalizada.");

if (contador > 0) {
    const media = soma / contador;
    console.log(`A soma dos números digitados é: ${soma}`);
    console.log(`A quantidade de números digitados é: ${contador}`);
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`); // Formata para 2 casas decimais
} else {
    console.log("Nenhum número válido foi digitado para calcular a média.");
}