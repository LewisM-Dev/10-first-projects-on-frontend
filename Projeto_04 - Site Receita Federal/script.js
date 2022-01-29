var saldo1 = 0
var saldo2 = 0
var saldo3 = 0

function deposito1() {
    var valordep = parseInt(document.getElementById("deposito-1").value);
    var escreva = document.getElementById("escreve1");
    saldo1 = saldo1 + valordep;
    escreva.innerHTML = "R$ " + saldo1;
}

function deposito2() {
    var valordep = parseInt(document.getElementById("deposito-2").value);
    var escreva = document.getElementById("escreve2");
    saldo2 = saldo2 + valordep;
    escreva.innerHTML = "R$ " + saldo2;
}

function deposito3() {
    var valordep = parseInt(document.getElementById("deposito-3").value);
    var escreva = document.getElementById("escreve3");
    saldo3 = saldo3 + valordep;
    escreva.innerHTML = "R$ " + saldo3;
}

function retira1() {
    var valordep = parseInt(document.getElementById("retirar-1").value);
    var escreva = document.getElementById("escreve1");
    saldo1 = saldo1 - valordep;
    escreva.innerHTML = "R$ " + saldo1;
}

function retira2() {
    var valordep = parseInt(document.getElementById("retirar-2").value);
    var escreva = document.getElementById("escreve2");
    saldo2 = saldo2 - valordep;
    escreva.innerHTML = "R$ " + saldo2;
}

function retira3() {
    var valordep = parseInt(document.getElementById("retirar-3").value);
    var escreva = document.getElementById("escreve3");
    saldo3 = saldo3 - valordep;
    escreva.innerHTML = "R$ " + saldo3;
}