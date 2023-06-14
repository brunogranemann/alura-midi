function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Variável contendo uma lista com todas as teclas.

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador] // Variável contendo a tecla específica. Ex: <button class="tecla tecla_pom">Pom</button>
    const instrumento = tecla.classList[1] // Contém a classe da tecla específica. Ex: tecla_pom
    const idAudio = `#som_${instrumento}` // Contém uma string com o id da tag áudio. Ex: #som_tecla_pom
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
