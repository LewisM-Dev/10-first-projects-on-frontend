let elementoExibir = document.getElementById("text");
let teclas = document.getElementsByTagName("button");
let elementoResultado = 0;

function clique(valor) {
    for (var i = 0; i < teclas.length; i++) {
        if (teclas[i].textContent == valor) {
          console.log(valor);
          elementoResultado += valor;
          elementoExibir.innerHTML = elementoResultado;
        }
      }
}

function apagar() {
    elementoResultado = "";
    elementoExibir.innerHTML = "";
    console.log("O Visualizador foi limpo");
}

function resultado() {
    console.log("Calculado");
    console.log(eval(elementoResultado));
    elementoExibir.innerHTML = eval(elementoResultado);
    elementoResultado = eval(elementoResultado);
}