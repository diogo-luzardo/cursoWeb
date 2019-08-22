let valor //Não inicializada.
console.log(valor)
//O Resultado da saída de valor será undefined.

valor = null //Ausência de valor.
console.log(valor)
//A Saída deste comonado será null.

//console.log(valor.toString()) // Erro! pois valor é null impossivel de ler.

const produto = {}
console.log(produto.preco)
//A saída deste comando é undefined pois o preco não foi definido.
console.log(produto)
//A saída será um objeto vazio '{}', pois não fizemos atribuição.

//Adicionando ao atributo preco o valor 3.50.
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined 
//Transformando em boolean.
console.log(!!produto.preco)
//delete produto.preco - deletando o preco atribuido ao produto
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)

