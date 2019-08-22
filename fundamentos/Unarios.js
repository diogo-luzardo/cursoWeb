let num1 = 1
let num2 = 2

num1++ //Pós fixada.
console.log(num1)
--num1 //Pré fixada.
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)
/*Exemplo importante para verificar a order de pré e pós fixagem de elementos
a variavel num, neste exemplo o num1 recebe o incremento antes da comparação
e o num 2 recebe depois da comparação resultado uma operção que era pra ser
falsa em verdadeiro devido a orde de incrementação e decrementação*/

