const input = require('readline-sync');

let nome = input.question("Digite seu nome: ");
let idade = Number(input.question("Digite sua idade: "));

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
else {
    console.log("Você é menor de idade.");
}