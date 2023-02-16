const input = document.querySelectorAll(".input");
const paragrafo = document.querySelectorAll(".paragrafo");
const nome = document.getElementById("nome");

function enviar() {
  input.forEach(function (inputAtual, index) {
    if (inputAtual.value == "") {
      setError(index);
    }
  });
}

function validarInput(pAtual) {
  if (paragrafo[pAtual].value !== "") {
    setRight(pAtual);
  }
}

function setRight(index) {
  input[index].classList.add("Right");
  input[index].classList.remove("Error");
  paragrafo[index].classList.add("escondido");
}

function setError(index) {
  input[index].classList.add("Error");
  input[index].classList.remove("Right");
  paragrafo[index].classList.remove("escondido");
}
