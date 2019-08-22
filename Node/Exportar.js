console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //Exemplo de que o this exporta algo pra fora neste caso o a com valor 1.
exports.b = 2 //Exemplo quie o exports também exeporta.
module.exports.c = 3//Mesma coisa que os anteriores.

exports = null
console.log(module.exports)
/*Este exemplo mosta que quando vc chama o module.exeports ele retorna os valores 
como acima, segue saída: -> { a: 1, b: 2, c: 3 }, não entendi muito o pq disso. */

exports = {
    nome: 'Teste'
}

console.log(module.exports)
/* Mesma coisa que acima o valor exports não se altera.*/

module.exports = {
    publico: true
}