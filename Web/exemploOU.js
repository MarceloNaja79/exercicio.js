const input = require('readline-sync');

let idade = Number(input.question("Digite sua idade: "));
let nome = input.question("Voce e Estudante? (Sim/Nao): ");

if (idade >= 60 || estudante() === "sim") {
    console.log(nome + ", Desconto Aplicado!");
} else {
    console.log(nome + ", Você não tem direito ao Desconto!");
}
