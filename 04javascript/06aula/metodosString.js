let nome = 'José Silva'

console.log(nome[11]);
console.log(nome.charAt(11)); // CharAt acessa o caracter onde você indicar a posição no indice do array/string

console.log(nome.length); // Length indicara quantos caracteres possui em sua string

console.log(nome.toLowerCase()) // Transforma tudo em minusculo
console.log(nome.toUpperCase()) // Transforma tudo em maiusculo

console.log(nome.substring(0,4)); // O primeiro número indica onde começa o corte e o segundo número indica onde termina

console.log(nome.split(' '));

let batata = 'batata'
console.log(batata.split('t')); // O split corta tudo o que você especificar e separa o restante em strings separadas

let meuNome = 'Thiago Fernandes'
// Faça com que seu nome seja substituido pelo sobrenome