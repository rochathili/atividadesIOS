let temperatura1 = 'FRIA'
let temperatura2 = 'AMBIENTE'
let temperatura3 = 'QUENTE'
let ar = false
let arLigado = true
let temperaturaAtual = ar

if (temperaturaAtual == temperatura1){
    console.log('a temperatura no momento está', temperatura1, 'ideal para dias quentes');
} else if (temperaturaAtual == temperatura2){
    console.log('a temperatura no momento está na temperatura', temperatura2,);
} else if (temperaturaAtual == temperatura3){
    console.log('a tempoeratura no momento está', temperatura3, 'ideal para dias frios');
} else if (temperaturaAtual == arLigado) {
    console.log('Ar Condicionado ligado', arLigado);
} else {
    console.log('Ar Condicionado desligado', ar);
}
