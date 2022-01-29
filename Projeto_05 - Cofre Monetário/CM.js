function bandeira1(pais) {

  img1 = document.getElementById("bandeira1");
  img2 = document.getElementById("bandeira2");

  br2 = document.getElementById("BR2");
  eua2 = document.getElementById("EUA2");
  eur2 = document.getElementById("EUR2");
  nulo2 = document.getElementById("nulo");

  if (pais == "BR" & br2.selected == false) {
    img1.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-brazil_1f1e7-1f1f7.png'>";
    br2.disabled = true;
    eua2.disabled = false;
    eur2.disabled = false;
  } else if (pais == "BR" & br2.selected == true) {
    img1.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-brazil_1f1e7-1f1f7.png'>";
    nulo2.selected = true;
    br2.disabled = true;
    eua2.disabled = false;
    eur2.disabled = false;
    img2.innerHTML = "";
  }
  
  
  if (pais == "EUA" & eua2.selected == false) {
    img1.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-united-states_1f1fa-1f1f8.png'>";
    br2.disabled = false;
    eua2.disabled = true;
    eur2.disabled = false;
  } else if (pais == "EUA" & eua2.selected == true) {
    img1.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-united-states_1f1fa-1f1f8.png'>";
    nulo2.selected = true;
    br2.disabled = false;
    eua2.disabled = true;
    eur2.disabled = false;
    img2.innerHTML = "";
  }
  
  
  if (pais == "EUR" & eur2.selected == false) {
    img1.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-european-union_1f1ea-1f1fa.png'>";
    br2.disabled = false;
    eua2.disabled = false;
    eur2.disabled = true;
  } else if (pais == "EUR" & eur2.selected == true){
    img1.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-european-union_1f1ea-1f1fa.png'>";
    nulo2.selected = true;
    br2.disabled = false;
    eua2.disabled = false;
    eur2.disabled = true;
    img2.innerHTML = "";
  }
}

function bandeira2(pais2) {

  img2 = document.getElementById("bandeira2")

  if (pais2 == "BR2") {
    img2.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-brazil_1f1e7-1f1f7.png'>"
  } else if (pais2 == "EUA2") {
    img2.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-united-states_1f1fa-1f1f8.png'>"
  } else if (pais2 == "EUR2") {
    img2.innerHTML = "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-european-union_1f1ea-1f1fa.png'>"
  }
}

function enviar() {
  br = document.getElementById("BR");
  eua = document.getElementById("EUA");
  eur = document.getElementById("EUR");

  br2 = document.getElementById("BR2");
  eua2 = document.getElementById("EUA2");
  eur2 = document.getElementById("EUR2");
  nulo2 = document.getElementById("nulo");


  dinheiro = parseFloat(document.getElementById("valor").value)
  escreva = document.getElementById("escreva")
  escreve = document.getElementById("escreve")

  if (dinheiro <= 9999999999 & dinheiro > 0) {
    if (nulo2.selected === true) {
      escreva.innerHTML = "Selecione os países corretamente"
    } else {
      if (br.selected === true){
        if (eua2.selected === true) {
          dinheiroFinal = (dinheiro * 0.1760);
          var text2 = "Doláres"
        } else if (eur2.selected === true) {
          dinheiroFinal = (dinheiro * 0.1557);
          var text2 = "Euros"
        }
      } else if (eua.selected === true) {
        if (br2.selected === true) {
          dinheiroFinal = (dinheiro * 5.6823);
          var text2 = "Reais"
        } else if (eur2.selected === true) {
          dinheiroFinal = (dinheiro * 0.8845);
          var text2 = "Euros"
        } 
      } else if (eur.selected === true) {
        if (br2.selected === true) {
          dinheiroFinal = (dinheiro * 6.4250);
          var text2 = "Reais"
        } else if (eua2.selected === true){
          dinheiroFinal = (dinheiro * 1.1306);
          var text2 = "Doláres"
        }
      }

      escreve.innerHTML = parseFloat(dinheiroFinal).toFixed(2) + " " + text2;

      $("#myModal").modal({
        show: true
      });

      escreva.innerHTML = "";
    } 
  }   else {
      escreva.innerHTML = "Digite um valor VÁLIDO";
  }
}