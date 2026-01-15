const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome");
  const altura = document.getElementById("altura");
  const peso = document.getElementById("peso");
  const resultado = document.getElementById("resultado");

  const valorIMC = peso.value / (altura.value * altura.value);

  if (nome.value !== "" && altura.value !== "" && peso.value !== "") {
  }
}

calcular.addEventListener("click", imc);
