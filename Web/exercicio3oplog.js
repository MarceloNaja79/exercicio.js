const prompt = require('prompt-sync')({ sigint: true });
console.log("--- Controle de Acesso VIP ---");

const nome = prompt("Seu nome: ");
const conviteVIP = prompt("Possui convite VIP? (sim/não): ").toLowerCase();
const listaEspecial = prompt("Está na lista de convidados especiais? (sim/não): ").toLowerCase();

const temConvite = conviteVIP === 'sim';
const estaNaLista = listaEspecial === 'sim';
const acessoLiberado = temConvite || estaNaLista;

console.log(`\nOlá, ${nome}.`);

if (acessoLiberado) {
    console.log("Acesso liberado à área VIP!");
} else {
    console.log("Acesso negado.");
}