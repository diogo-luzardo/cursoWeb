Array.prototype.reduce2 = function(callback, valorInicial){
    const indiciInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = 1; i < this.length; i ++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21)) //Neste caso o 21 é o valor inicial, ele começa a soma já com 21.
