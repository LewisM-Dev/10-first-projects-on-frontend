let points = 0;

let score = document.getElementById("points")
let computador1 = document.getElementById("computer1");
let computador2 = document.getElementById("computer2");
let mensagem1 = document.getElementById("message1");
let mensagem2 = document.getElementById("message2");

function play(item) {
    if (item == 1) {
        document.getElementById("tesoura").style.display = "none";
        document.getElementById("rock").style.display = "none";
        setTimeout(function(){
            document.getElementById("computer1").style.display = "block";
        },1000);
    } if (item == 2) {
        document.getElementById("paper").style.display = "none";
        document.getElementById("rock").style.display = "none";
        setTimeout(function(){
            document.getElementById("computer1").style.display = "block";
        },1000);
    } if (item == 3) {
        document.getElementById("paper-tesour").style.display = "none";
        document.getElementById("rockes").style.justifyContent = "space-between";
        setTimeout(function(){
            document.getElementById("computer2").style.display = "block";;
        },1000);
    }
    document.getElementById("text-messages").style.display = "flex";

    sortear(item);
}

function sortear(ite) {
    let numero = ((Math.random()+0.2)*3).toFixed()
    if (numero == 4){
        numero = 3;
    }
    console.log(numero)
    if (numero == 1) {
        setTimeout(function(){
            computador1.innerHTML = "<img src='images/icon-paper.svg'>";
            computador2.innerHTML = "<img src='images/icon-paper.svg'>";
        },2000);
    } if (numero == 2) {
        setTimeout(function(){
            computador1.innerHTML = "<img src='images/icon-scissors.svg'>";
            computador2.innerHTML = "<img src='images/icon-scissors.svg'>";
        },2000);
    } if (numero == 3) {
        setTimeout(function(){
            computador1.innerHTML = "<img src='images/icon-rock.svg'>";
            computador2.innerHTML = "<img src='images/icon-rock.svg'>";
        },2000);
    }

    verificar(ite, numero)
}

function verificar(it, numer) {
    if (it == 1 && numer == 3 || it == 2 && numer == 1 || it == 3 && numer == 2) {
            mensagem1.innerHTML = "VOCÊ GANHOU";
            mensagem2.innerHTML = "VOCÊ GANHOU";
            points++;
        } if (it == 1 && numer == 1 || it == 2 && numer == 2 || it == 3 && numer == 3) {
            mensagem1.innerHTML = "EMPATE";
            mensagem2.innerHTML = "EMPATE";
        } if (it == 1 && numer == 2 || it == 2 && numer == 3 || it == 3 && numer == 1) {
            mensagem1.innerHTML = "VOCÊ PERDEU";
            mensagem2.innerHTML = "VOCÊ PERDEU";
            points--;
        }
    if (it == 3) {
        setTimeout(function(){
            document.getElementById("message-box2").style.display = "flex";
        },3000);
    } else {
        setTimeout(function(){
            document.getElementById("message-box1").style.display = "flex";
        },3000);
    }
    setTimeout(function(){
        document.getElementById("text-messages").style.display = "none";
        score.innerHTML = points;
    },3000);
}

function playagain() {
    document.getElementById("message-box1").style.display = "none";
    document.getElementById("message-box2").style.display = "none";

    document.getElementById("computer1").style.display = "none";
    document.getElementById("computer2").style.display = "none";

    document.getElementById("paper").style.display = "block";
    document.getElementById("tesoura").style.display = "block";
    document.getElementById("rock").style.display = "block";

    document.getElementById("paper-tesour").style.display = "flex";
    document.getElementById("rockes").style.justifyContent = "center";

    computador1.innerHTML = "";
    computador2.innerHTML = "";
}