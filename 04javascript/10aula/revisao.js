// Faça um loop while que imprime até 10 números da sequeência de Fibonacci

let num1 = 0, num2 =1, proximo

let contador = 1
while(contador <= 10){    
    proximo = num1 + num2
    
    console.log(`${contador}: ${num1}`);
    num1 = num2
    num2 = proximo

    contador++
}           