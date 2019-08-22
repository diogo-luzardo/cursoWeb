//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
// Saída do console 'Extensível: false'.

produto.nome = 'Borracha' // Podemos alterar um objeto que não pode sofrer extensão
produto.descricao = 'Borracha escolar branca' //Metodo descricao não existe no objeto entao ele teria que adicionar, neste caso não é possivel
delete produto.tag // Deletar é possivel, mas não é possivel adicionar.
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)  // Quando o Objeto é selado vc não consegue adicionar nem excluir porém consegue modificar.
console.log('Selado:', Object.isSealed(pessoa))// Saída é 'Selado: true'

//Testes no objeto selado\


pessoa.sobrenome = 'Silva' /*O atributo sobrenome não existe no objeto pessoa, como não podemos adicionar nada ao objeto
esse linha sera iguinorada*/
delete pessoa.nome//Objeto selado não podemos excluir, esta linha também será iguinorada.
pessoa.idade = 29//No Objeto pessoa temos o atributo idade e em objeto selado podemos alterar atributos.
console.log(pessoa)//Saída na console -> '{ nome: 'Juliana', idade: 29 }'

// Obejct.freeze = selado + valores constantes

