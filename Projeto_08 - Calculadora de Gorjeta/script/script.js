let radio = document.getElementsByClassName("percent");
let percent;

function muda(selected) {
    let custom = (document.getElementById("custom").value);
    let select = selected;

    if (custom > 0) {

        for (let i=0; i<radio.length; i++) {
            radio[i].checked = false
        };

        percent = parseFloat(custom).toFixed(2);
    } else if (select>0) {
        percent = parseInt(select);
    } else {
        percent = 0;
    };

    console.log("Gorjeta:" + percent + "%");
}

function calcula() {
    let bill = parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person-numbers").value);
    let tiPP =document.getElementById("tiPP");
    let toPP = document.getElementById("toPP");

    if (bill>0 & person>0 & percent>=0) {
        console.log("Total da Conta:R$" + bill + ", Numero de Pessoas:" + person + ", Gorjeta:" + percent + "%");

        let tipPerson = parseFloat((bill*(percent/100))/person).toFixed(2);
        console.log("Gorjeta por pessoa: R$" + tipPerson);

        tiPP.innerHTML = "<img src='images/icon-dollar2.png' alt='icon-dollar'>" + tipPerson;

        let totalPerson = parseFloat(((tipPerson*person)+bill)/person).toFixed(2);
        console.log("Total por pessoa: R$" + totalPerson);

        toPP.innerHTML = " <img src='images/icon-dollar2.png' alt='icon-dollar'>" + totalPerson;
    }
}

function limpa() {
    document.getElementById("bill").value = 0;
    document.getElementById("person-numbers").value = 0;
    document.getElementById("custom").value = "";
    let tiPP = document.getElementById("tiPP");
    let toPP = document.getElementById("toPP");

    tiPP.innerHTML = "<img src='images/icon-dollar2.png' alt='icon-dollar'>0.00";
    toPP.innerHTML = " <img src='images/icon-dollar2.png' alt='icon-dollar'>0.00";

    for (let i=0; i<radio.length; i++) {
        radio[i].checked = false
    };
}
