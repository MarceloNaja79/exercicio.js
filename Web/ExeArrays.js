const numeros = [];

for (let i = 0; i < 5; i++) {
    const numeroDigitado = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    numeros.push(numeroDigitado);
}

const maiorNumero = Math.max(...numeros);

const menorNumero = Math.min(...numeros);

const somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

const media = somaTotal / numeros.length;

console.log("--- Resultados da Análise ---");
console.log(`Números digitados: ${numeros.join(', ')}`);
console.log(`Maior número: ${maiorNumero}`);
console.log(`Menor número: ${menorNumero}`);
console.log(`Soma de todos os números: ${somaTotal}`);
console.log(`Média dos números: ${media}`);
console.log("-----------------------------");