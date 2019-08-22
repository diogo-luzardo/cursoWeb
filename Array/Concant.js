const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Arthur', 'Diogo']
const todos = filhas.concat(filhos, 'Eduardo')
console.log(filhas)
console.log(filhos)
console.log(todos)
console.log([].concat([1, 2], [3, 4], 5, [[6,7]]))//Quando temos elementos dentro de 2 arrays é o que chamamos de matriz
//Saída do console -> [ 1, 2, 3, 4, 5, [ 6, 7 ] ]