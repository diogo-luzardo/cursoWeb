//Criação do array.
const valores = [7.7, 8.9, 6.3, 9.2]
//Verificando posições especificas.
console.log(valores[0], valores[3])
//Verificando uma posição que não existe.
console.log(valores[4])
//Adicionando um valor na posição 4.
valores[4] = 10.0
console.log(valores)
//Adicionando valor em uma posição distante da ultima do array.
valores[10] = 11.0
console.log(valores)
//Verificando a quantidade de valores no array
console.log(valores.length)
//Outro método para adicionar valor ao Array.
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//Remover o ultimo valor do array.
console.log(valores.pop())
console.log(valores)
//Remover com o delete.
delete valores[0]
console.log(valores)
//verificando que o array é um objeto
console.log(typeof valores)