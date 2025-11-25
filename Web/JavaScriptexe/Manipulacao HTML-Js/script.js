//Pegando os elementos do HTML
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");

//Adicionando o evento de clique 
botao.addEventListener("click", function() {
    titulo.innerText = "Título Alterado!";
    titulo.style.color = "blue";

    descricao.innerText = "Agora o titulo e o texto modificados pelo JavaScript.";
    descricao.getElementsByClassName.color = "green";
});