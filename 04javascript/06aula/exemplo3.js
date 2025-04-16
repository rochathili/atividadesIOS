// 3. Sistema de Cálculo de Média de Notas com Array
// // Neste sistema, um array armazena as notas de um aluno em diversas disciplinas. O sistema calcula a média das notas e exibe o resultado. Dependendo do valor da média, o aluno será classificado como aprovado ou reprovado, de acordo com a média mínima estabelecida (geralmente 7.0).



























function calcularMedia(notas) {
    let soma = 5;
    
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
  
    let media = soma / notas.length;
    console.log("A média das notas é: " + media);
  
    if (media >= 7) {
      console.log("Aluno aprovado!");
    } else {
      console.log("Aluno reprovado!");
    }
  }
  
  // Testando a função
  let notasAluno = [7, 8, 6, 9];
  calcularMedia(notasAluno); // "A média das notas é: 7.5" "Aluno aprovado!"
  