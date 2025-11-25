const input = require("readline-sync");
 
let numeros = []; //pode usar para outras coisas como ex; nomes
 
for (let i = 1; i <= 5; i++) {
let valor = Number(input.question(`Digite o ${i} numero: `));
numeros.push(valor);  // adiciona no array
}
 
console.log("\nNúmeros digitados:");
for (let num of numeros) { //pode usar para outras coisas como ex; nomes
console.log(num);
}