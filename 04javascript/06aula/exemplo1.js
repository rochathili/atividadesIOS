// 1. Sistema de Verificação de Idade com if-else
// // Este sistema verifica se a pessoa tem idade suficiente para acessar um conteúdo restrito, como um site ou serviço. Se a idade for maior ou igual a 18 anos, a pessoa tem permissão para acessar o conteúdo; caso contrário, uma mensagem de erro é exibida informando que a idade mínima não foi atingida.
















function verificarIdade(idade) {
    if (idade >= 18) {
      console.log("Você tem idade suficiente para acessar o conteúdo.");
    } else {
      console.log("Desculpe, você precisa ter 18 anos ou mais.");
    }
  }

  // Testando a função
  verificarIdade(20); // "Você tem idade suficiente para acessar o conteúdo."
  verificarIdade(16); // "Desculpe, você precisa ter 18 anos ou mais."
  