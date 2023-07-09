/* 


 o que precisamos fazer? - quando passar o mouse em cima do personagem na lista
temos que adiconar a borda azul de seleção na imagem pequena do personaggem selecionado e
mostrar a imagem, o nome e o texto grande do personagem que está selecionado 

   OBJETVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no js
        para poder verificar quando o usuaroio
        passar o mouse em cima de um deles

        passo 2 - adiciionar a classe
        selecionado no personmagem que o
        usuario passar o cursor do mouse

        passo 3 - verificar se já exista um
        personagem selecionado, se sim,
        devemos remover a seleção dele
     
    OBJETIVO 2 - quando passar o mouse em
    cima do personagem na listagem, trocar a
    image, o nome e a drescrição do
    personmagem grande
        passo 1 - pegar o elemento do 
        personagem grande para 
        adicionar as informações nele

        passo 2 - alterar a imagem do
        personagem grande

        passo 3 - alterar o nome do
        personagem grande

        passo 4 - alterar a descrição
        do personagem grande
*/

// OBJETVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo passo 1 - pegar os personagens no js para poder verificar quando o usuaroio passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');


// passo 2 - adiciionar a classe selecionado no personmagem que o usuario passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWiidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
         personagem.classList.add('selecionado');

    //      OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a image, o nome e a drescrição do personmagem grande
    //     passo 1 - pegar o elemento do  personagem grande para adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;

         imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //  passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})