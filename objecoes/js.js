const meuBotao = document.getElementById("meu");
const mensagem = document.getElementById("mas");
const caixa = document.getElementById("cxx");
const mybutton = document.getElementById("me");

// Função que será executada quando o botão for clicado

const frases = [
  "Para Emagrecer náo adianta so fazer exercicios, envolve um equilíbrio entre a quantidade de calorias que você consome e a quantidade que você queima. `Aqui estão alguns pontos-chave para emagrecer de forma saudável: Dieta Balanceada: Consuma uma dieta equilibrada, rica em vegetais, frutas, proteínas magras e grãos integrais. Evite alimentos processados, açúcares refinados e gorduras saturadas.",
  "Controle de Calorias: Emagrecer geralmente requer consumir menos calorias do que você queima. Isso cria um déficit calórico, levando à perda de peso ao longo do tempo.    Exercício Regular: Combine uma dieta saudável com atividade física regular. O exercício ajuda a queimar calorias, melhora o condicionamento físico e ajuda a manter a massa muscular durante a perda de peso.",
  "Exercício Regular: Combine uma dieta saudável com atividade física regular. O exercício ajuda a queimar calorias, melhora o condicionamento físico e ajuda a manter a massa muscular durante a perda de peso.",
  "Lembre-se, a chave para o emagrecimento bem-sucedido é fazer mudanças sustentáveis no estilo de vida que você pode manter a longo prazo.",
];

let indiceAtual = 0;

// Função para exibir a frase com base no índice
function exibirFrase() {
  mensagem.textContent = frases[indiceAtual];

    // Se for a última frase, adicione um novo botão
    if (indiceAtual === frases.length - 1) {
      adicionarNovoBotao();
    }
  }

function adicionarNovoBotao() {
    const novoBotao = document.createElement("button");
    novoBotao.textContent = "Entendi";
        novoBotao.classList.add("meuNovoBotao");

    const caixa = document.querySelector(".butc")
        caixa.appendChild(novoBotao);
        novoBotao.onclick = function() {
        window.location.href = "/teste/index.html"; // Substitua com o seu link desejado
        };
}


// Adicionar evento de clique para o botão "Próxima Frase"
meuBotao.addEventListener("click", function () {
  if (indiceAtual < frases.length - 1) {
    indiceAtual++;
    exibirFrase();
  } else {
    console.log("ultima frase");
  }
});

// Adicionar evento de clique para o botão "Frase Anterior"
mybutton.addEventListener("click", function () {
  if (indiceAtual > 0) {
    indiceAtual--;
  } else {
    console.log("voce esta na ultima frase");
  }
  exibirFrase();
});

// Exibir a primeira frase inicialmente
exibirFrase();
