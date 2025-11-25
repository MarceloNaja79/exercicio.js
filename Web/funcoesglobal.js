let valorFinal;

const readline = require('readline-sync');

function calcularDesconto() {
    let valorCompra = parseFloat(readline.question("Digite o valor da compra: "));
    let desconto
    do {
        desconto = parseFloat(readline.question("Digite a porcentagem de desconto (%): "));
        if (desconto > 100) {
            console.log("Porcentagem inválida. Digite um valor MENOR que 100. ");
        }
    } while (desconto > 100);
    
        valorFinal = valorCompra - (valorCompra * (desconto / 100));
    }
   

    calcularDesconto();

    console.log("Valor Final da Compra: R$ " + valorFinal.toFixed(2));