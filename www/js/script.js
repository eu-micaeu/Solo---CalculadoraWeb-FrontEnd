const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const titulo = document.getElementById("titulo");
const corpo = document.querySelector("body");

botao1.addEventListener("click", function() {
  titulo.innerHTML = "Título alterado pelo JavaScript";
});

botao2.addEventListener("click", function() {
  const cores = ["lightgray", "pink", "lightblue", "lightgreen", "yellow"];
  const corAtual = corpo.style.backgroundColor;
  let novaCor;
  if (corAtual === "") {
    novaCor = cores[0];
  } else {
    const index = cores.indexOf(corAtual);
    novaCor = index === cores.length - 1 ? cores[0] : cores[index + 1];
  }
  corpo.style.backgroundColor = novaCor;
});