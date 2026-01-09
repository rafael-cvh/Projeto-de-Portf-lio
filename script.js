const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");
    const textoOriginal = btn.innerText;

    btn.innerText = "Enviado!";
    btn.style.backgroundColor = "#4ade80";
    btn.style.color = "#000";

    alert("Obrigado! Mensagem recebida com sucesso.");

    form.reset();

    setTimeout(() => {
      btn.innerText = textoOriginal;
      btn.style.backgroundColor = "";
      btn.style.color = "";
    }, 3000);
  });
}

/*Efeitinho de digitar*/
const texto = document.querySelector(".typing-effect");
const frases = [
  "Desenvolvedores FullStack",
  "Estudantes do IFMA",
  "Criadores de Soluções",
];

let fraseIndice = 0;
let charIndice = 0;
let isDeleting = false;

function typeWriter() {
  if (!texto) return;

  const fraseAtual = frases[fraseIndice];

  if (isDeleting) {
    texto.textContent = fraseAtual.substring(0, charIndice - 1);
    charIndice--;
  } else {
    texto.textContent = fraseAtual.substring(0, charIndice + 1);
    charIndice++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndice === fraseAtual.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndice === 0) {
    isDeleting = false;
    fraseIndice = (fraseIndice + 1) % frases.length;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeWriter);
