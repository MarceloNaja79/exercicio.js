const input = require('readline-sync');

let nome = input.question("Digite seu nome: ");
let idade = Number(input.question("Digite sua idade: "));

console.log("Olá, " + nome + "! Seja bem-vindo(a)!");
console.log("Daqui 5 anos você terá:" , idade + 5);