function mouseSobreBotao(botao) {
    botao.style.background = '#005c99';
}

function mouseForaBotao(botao) {
    botao.style.background = '#007acc';
}

function iniciarQuiz() {
    var quiz = document.getElementById("quiz");
    quiz.style = "display: block";
    botaoIniciar = document.getElementById("botaoIniciar");
    botaoIniciar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="vertical-align: middle"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg><strong style="vertical-align: middle"> Quiz iniciado</strong>';
}

function verificarRespostas() {
      
      var verifica = [];
      var respostasCertas = 0;
      var infoCorrecao = document.getElementsByClassName("infoCorrecao");
      var nomeClassePerguntas = [];
      var nomeClasseCorrecao = [];
      var perguntas = document.getElementsByClassName("perguntas");
          
      for (p = 0; p < perguntas.length; p++) {
          n = String(p + 1);
          nomeClassePerguntas[p] = "pergunta" + n;
          nomeClasseCorrecao[p] = "correcao" + n;
      }


      for (p = 0; p < perguntas.length; p++) {
          verifica[p] = document.getElementsByClassName(nomeClassePerguntas[p]);
          for (i = 0; i < 2; i++) {
              if ((verifica[p].item(i).checked == true) && (verifica[p].item(i).value == "correto")) {
                      document.getElementById(nomeClasseCorrecao[p]).innerHTML = "<p style='color:green'><strong>Resposta certa!</strong></p>";
                      respostasCertas = respostasCertas + 1;
                  }
              if ((verifica[p].item(i).checked == true) && (verifica[p].item(i).value == "errado")) {
                      document.getElementById(nomeClasseCorrecao[p]).innerHTML = "<p style='color:red'><strong>Resposta errada.</strong></p>";
                  }

              }
          }

    for (p = 0; p < infoCorrecao.length; p++) {
        infoCorrecao[p].style.display = "inline-block";
    }

    document.getElementById("numeroCertas").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#007acc" style="vertical-align: middle"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg><h3 id="parabens"></h3><p> Você acertou ' + respostasCertas + ' das '+ perguntas.length +' questões.</p>';
    if (respostasCertas == perguntas.length) {
        document.getElementById("parabens").innerHTML = 'Parabéns!'
    }

    if (respostasCertas < 10 && respostasCertas >= 8) {
        document.getElementById("parabens").innerHTML = 'Por pouco!'
    }

    document.getElementById("botaoVerificaRespostas").style.display = 'none';  	 
}
