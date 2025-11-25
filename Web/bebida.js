const input = require('readline-sync');
let apcao = Number(input.question("Digite um numero de 1 a 3: "));

switch (apcao) {
    case 1:
        console.log("Você escolheu Coca Cola");
        break;
    case 2:
        console.log("Você escolheu Suco de Laranja");
        break;
    case 3:
        console.log("Você escolheu Água Mineral");
        break;
    default:
        console.log("Opção inválida! Por favor, escolha um número entre 1 e 3.");
        break;
}