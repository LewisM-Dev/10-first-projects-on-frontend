let elementoExibir = document.getElementById("screen");
let teclas = document.getElementsByTagName("button");
let elementoResultado = 0;

function clique(valor) {
  elementoResultado += valor;
  elementoExibir.innerHTML = elementoResultado;
}

function resetar() {
  elementoResultado = "";
  elementoExibir.innerHTML = "0";
  console.log("O Visualizador foi limpo");
}

function apagar() {
  elementoConta = elementoResultado.toString();
  elementoResultado = elementoConta.slice(0, elementoConta.length - 1);
  elementoExibir.innerHTML = elementoResultado;
}

function resultado() {
  elementoResultado = (eval(elementoResultado));
  if (elementoResultado > elementoResultado.toFixed()) {
    elementoConta = elementoResultado.toString();
    if (elementoResultado == 0.30000000000000004) {
      elementoConta = "0.3";
    }
    elementoResultado = elementoResultado.toLocaleString(undefined, {  
      minimumFractionDigits: ((elementoConta.length - ((elementoResultado.toFixed()).toString()).length)-1),
    }).replace(",", ".");
    elementoExibir.innerHTML = elementoResultado;
  } else {
    elementoExibir.innerHTML = elementoResultado;
  }
}