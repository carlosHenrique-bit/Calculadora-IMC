const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome");
  const altura = document.getElementById("altura");
  const peso = document.getElementById("peso");
  const resultado = document.getElementById("resultado");

  if (nome.value !== "" && altura.value !== "" && peso.value !== "") {
    let valorIMC = peso.value / (altura.value * altura.value);
    let classificação = "";
    if (valorIMC < 18.5) {
      classificação = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificação = "peso ideal, parabens!";
    } else if (valorIMC < 30) {
      classificação = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificação = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificação = "com obesidade grau II.";
    } else {
      classificação = "com obesidade grau III, Cuidado!";
    }
    resultado.textContent = `${nome.value} seu IMC é ${valorIMC.toFixed(
      2
    )} e você esta com ${classificação}`;
  } else {
    resultado.textContent = "Preencha todos os campos.";
  }
}

calcular.addEventListener("click", imc);
