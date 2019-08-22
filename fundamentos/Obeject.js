//Criação de um objeto um objeto é sempre um conjunto de chaves e valores.
const prod1 = {} //Chaves representam os objetos em JS
//Criando o identificador nome e atribuindo o valor 'Celular Ultra Mega'
prod1.nome = 'Celular Ultra Mega'
//Criando o identificador preco e atribuindo o valor '4998.90'
prod1.preco = 4998.90
//Mostrando na tela o Objeto prod1.
console.log(prod1)
//Adicionado ao objeto prod1 a chave Desconto Legal e o valor 0.40.
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço.
//Outra forma de criar um objeto.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2)
