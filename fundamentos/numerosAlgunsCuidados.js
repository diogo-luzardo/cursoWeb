console.log(7 / 0) //Retorna um valor infinito, pois quando dividimos um número por outro muito pequeno ele tende a ficar maior
console.log('10' / 2) /*Conseguimos dividir strings no JS.*/
console.log("Show!" * 2) //Na saída desta linha recebemos o resultado 'Nan'que seria Not a number, não é um número.
console.log(0.1 + 0.7)// Não resulta em 8 usa um padrao com menor precisao para ganhar performance
//console.log(10.toString()) Não funciona exemplo abaixo de como funciona
console.log((10.4224).toFixed(2)) // Gera um número float com duas casas decimais
console.log('3' + 2) // Neste caso ele não soma e sim concatena pois String no JS tem preferencia
