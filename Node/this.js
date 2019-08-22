console.log(this === global)//false pois o this não aponta para o global e sim para o module.exports
console.log(this === module)//false pois o this aponta para module.exports.

console.log(this === module.exports)// true.
console.log(this === exports)//true pois o exports é uma extenção de module.

function logThis(){
    console.log('Dentro de uma função é...')//É false, lembrar disso.
    console.log(this === exports)//false
    console.log(this === module.exports)//false
    console.log(this === global)//True, interessando pois dentro de uma função o this aponta para globo e fora para module.exports.
}

logThis()