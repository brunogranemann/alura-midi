function tocaSom(seletorAudio) { // Cria a função de tocar o som
    
    const elemento = document.querySelector(seletorAudio); // Armazena dentro de uma constante o valor do seletorAudio

    if (elemento && elemento.localName === 'audio') { // Verifica se o valor do elemento existe e se o seu localName é igual a audio
        elemento.play(); // Reproduz o som
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido') // Informa ao usuário se ouve algum erro
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Referência contendo uma lista com todas as teclas do nosso documento HTML

for (let contador = 0; contador < listaDeTeclas.length; contador++) { // Percorre todos os elementos de dentro da listaDeTeclas

    const tecla = listaDeTeclas[contador]; // Referência contendo a tecla específica. Ex: <button class="tecla tecla_pom">Pom</button>
    const instrumento = tecla.classList[1]; // Referência contendo a classe da tecla específica. Ex: tecla_pom
    const idAudio = `#som_${instrumento}`; // Contém uma string com o id da tag áudio. Ex: #som_tecla_pom

    tecla.onclick = function () { // Chama uma função anônima através do clique na tecla (a função anônima foi utilizada para chamar outra função, assim evitando que a função tocaSom fosse reproduzida durante o carregamento da página)      
        tocaSom(idAudio); // Chama a função tocaSom
    }

    // Quando a navegação entre teclas é feita pelo teclado, adicionei abaixo mais acessibilidade através de respostas visuais

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') { // Verifica se a tecla pressionada é Enter ou Space
           tecla.classList.add('ativa'); // Adiciona a classe 'ativa' às classes
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); // Remove a classe 'ativa' das classes
    }

}
