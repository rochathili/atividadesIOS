let tiposManga = ['Palmer', 'Tommy', 'Rosa', 'Ubá', 'Espada']

console.log('Aqui na roça nois tem essas manga ae oh ',tiposManga);

/* 
    Contador no início do array i = 0
    Executará enquanto i for menor que a quantidade de itens no array de mangas
    i++ incrementa/adiciona 1 ao número anterior
*/

for(i = 0; i < tiposManga.length; i++){
    console.log(`${i+1} ${tiposManga[i]}`);
}


contador = 20

// While repetirá enquanto sua comparação for verdade
while(contador <= 10){
    console.log( contador, 'Pamonha 🌽');

    if(contador == 10){
        console.log('Compreensível! Tenha um ótimo dia');
    }
    contador++

}