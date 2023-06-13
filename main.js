function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Variável contendo uma lista com todas as teclas.

listaDeTeclas[0].onclick = tocaSomPom;