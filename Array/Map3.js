Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }', // -> Elementos JSON
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços.

const paraObjeto = json => JSON.parse(json)// Função que converte JSON para Objeto.
const apenasPreco = produto => produto.preco// Função para pegar apenas o preço/

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)