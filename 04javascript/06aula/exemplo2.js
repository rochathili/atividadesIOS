// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.) e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7), uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.
















function mensagemDoDia(dia) {
    switch (dia) {
      case 1:
        console.log("Hoje é segunda-feira!");
        break;
      case 2:
        console.log("Hoje é terça-feira!");
        break;
      case 3:
        console.log("Hoje é quarta-feira!");
        break;
      case 4:
        console.log("Hoje é quinta-feira!");
        break;
      case 5:
        console.log("Hoje é sexta-feira!");
        break;
      case 6:
        console.log("Hoje é sábado!");
        break;
      case 7:
        console.log("Hoje é domingo!");
        break;
      default:
        console.log("Dia inválido.");
        break;
    }
  }
  
  // Testando a função
  mensagemDoDia(1); // "Hoje é segunda-feira!"
  mensagemDoDia(6); // "Hoje é sábado!"
  mensagemDoDia(10); // "Dia inválido."
  