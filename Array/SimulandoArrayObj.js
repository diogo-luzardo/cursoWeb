const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
//Saída do console -> { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])
//Saída do console -> Rafael

const meuArray = [ 'Rafael', 'Ana', 'Bia' ]
console.log(quaseArray.toString(), meuArray)//Comparando um Array normal e o exemplo com objetos criado neste exemplo.
//Saída do console -> [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]