const meuBotao = document.getElementById("meu");
const mensagem = document.getElementById("mas");
const caixa = document.getElementById("cxx");
const mybutton = document.getElementById("me");

// Função que será executada quando o botão for clicado

const frases = [
  "Ganhar massa muscular envolve uma combinação de treinamento adequado, nutrição equilibrada, descanso suficiente e consistência. Aqui estão algumas diretrizes para ajudar quem quer ganhar massa muscular:",
  "Treinamento de Força: Levantamento de Peso: Foque em exercícios compostos como agachamentos, supinos, levantamento terra, e flexões. Estes recrutam múltiplos grupos musculares. Progressão Gradual: Aumente o peso gradualmente para desafiar seus músculos continuamente. Número de Repetições: Para ganhar massa muscular, geralmente é recomendado fazer de 6 a 12 repetições por série.",
  "Descanso e Recuperação:Sono: O corpo se recupera durante o sono profundo. Tente dormir de 7 a 9 horas por noite.Dias de Descanso: Dê aos músculos tempo para se recuperar. Programas que alternam grupos musculares podem ajudar.Recuperação Ativa: Atividades como ioga ou caminhadas leves podem ajudar na recuperação.",
  "Suplementação (Opcional):Proteína em Pó: Pode ser útil para atingir suas necessidades proteicas diárias.Creatina: Ajuda a melhorar o desempenho durante os treinos.BCAAs (aminoácidos de cadeia ramificada): Podem ajudar na recuperação muscular.",
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
