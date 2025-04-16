let saboresPastel = ['Queijo', 'Pizza', 'Bauru', 'Portuguesa', 'Brócolis','Atum', 'Lasanha', 'Especial de carne', 'Palmito', 'Alho poró']
// Sabores pastel não contém Abacaxi
saboresPastel.push('Abacaxi')
// Adicionamos o abacaxi
console.log(saboresPastel);
// Exibiu na tela o array atualizado

saboresPastel.pop()
// Criamos um novo array onde armazenamos o Abacaxi que veio do saboresPastel

console.log('Caixa onde guardamos os pastéis: '+ saboresPastel);

saboresPastel.splice(5,1);
// Splice recebe dois valores separados por virgula, o primeiro valor indica onde será o corte e o segudo valor indica qual o tamanho do corte

console.log(saboresPastel);