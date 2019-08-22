Array.prototype.filter2 = function(callback){ //Criando um novo filter, apenas para conhecimento de como funciona essa função.
    const newArray = []
    for (i = 0; i < this.length; i ++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
/*
Esta função serve para pegar um determinado produto com o preco maior que 500 em qualquer
lista com preço, minha duvida surgiu pois não encontrava onde ele faz referencia com a lista
criada no exemplo, depois entendi que na verdade é uma função a parte que serve apenas para
checar o preço do produto, nada mais!
*/
const fragil = produto => produto.fragil
/*
Mesma coisa que acima apenas uma função para verificar o valor booleano dentro do variavel 
fragil de qualque lista que possa usar na hora que quiser.
*/
console.log(produtos.filter2(caro).filter2(fragil))
/*
Aqui a parte interessante do exemplo ele invoca no console.log a lista produtos com o método
filter usando as funções criadas acima.
*/