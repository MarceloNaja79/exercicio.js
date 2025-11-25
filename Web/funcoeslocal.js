const readline = require('readline-sync');

function calcularMedia() {


    let nota1 = parseFloat(readline.question("Digite a primeira nota: "));
    let nota2 = parseFloat(readline.question("Digite a segunda nota: "));


    let media = (nota1 + nota2) / 2;

    console.log(`Média do aluno: ${media.toFixed(2)}`);


    if (media >= 6) {
        console.log("Status: Aprovado ✅");
    } else {
        console.log("Status: Reprovado ❌");
    }
}


calcularMedia();

// Tentando acessar a variável local fora da função (vai gerar erro)
//console.log(media); // ERRO: media is not defined