const botao = document.getElementById('meuBotao');
botao.addEventListener('mouseover', () => {
    botao.style.backgroundColor = 'lightblue';
});
botao.addEventListener('mouseout', () => {
    botao.style.backgroundColor = '';
});