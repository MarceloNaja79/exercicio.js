const precoOriginal = 150.00; 
const percentualDesconto = 15; 

const valorDesconto = (precoOriginal * percentualDesconto) / 100;

const valorFinal = precoOriginal - valorDesconto;

console.log("--- Cálculo de Desconto do Produto ---");
console.log(`Preço Original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Percentual de Desconto: ${percentualDesconto}%`);
console.log(`Valor do Desconto em Reais: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor Final a ser Pago: R$ ${valorFinal.toFixed(2)}`);
console.log("------------------------------------");