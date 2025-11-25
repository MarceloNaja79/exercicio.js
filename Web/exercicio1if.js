const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

console.log("Bem-vindo à lanchonete!");
rl.question("Digite o tamanho do suco (P, M ou G): ", (tamanho) => {

    const tamanhoFormatado = tamanho.trim().toUpperCase();
    let preco = 0;
    let mensagem = "";

    if (tamanhoFormatado === 'P') {
        preco = 5.00;
        mensagem = `Suco Pequeno (P): R$ ${preco.toFixed(2)}`;
    } else if (tamanhoFormatado === 'M') {
        preco = 7.00;
        mensagem = `Suco Médio (M): R$ ${preco.toFixed(2)}`;
    } else if (tamanhoFormatado === 'G') {
        preco = 9.00;
        mensagem = `Suco Grande (G): R$ ${preco.toFixed(2)}`;
    } else {
        mensagem = "Opção inválida.";
    }

    console.log(mensagem);
    rl.close();
});