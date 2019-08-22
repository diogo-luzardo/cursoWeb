const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }', // -> Elementos JSON
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços.

const paraObjeto = json => JSON.parse(json)// Função que converte JSON para Objeto.
const apenasPreco = produto => produto.preco// Função para pegar apenas o preço/

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
