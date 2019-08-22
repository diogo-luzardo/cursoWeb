/*Observação importante para o map temos o return um novo array, porém no caso do filter
temos que retornar verdadeiro ou falso, lembrar que filter sempre temos que retornar um
valor verdadeiro ou falso.
*/

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))
//Usando o return como false os produtos nãA vão estar presente no array.
//Usando o true ele mostra o objeto completo.

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))
//Usando o filtro de preço no valor de 2500 a saída retorna apenas o ipad pro no valor de 4199
//Saída do console - [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]

console.log(produtos.filter(function(p){
    return p.preco > 1000
}))
//Usando o valor de filtro maior que 1000 ele tras o noteboo e o ipad.
//Saída para o console -> [ { nome: 'Notebook', preco: 2499, fragil: true },
 //                         { nome: 'iPad Pro', preco: 4199, fragil: true } ]

console.log(produtos.filter(function(k){ //Minha solução.
    if (k.preco > 2400)
        if (k.fragil == true)
        return true  
}))

const caro = produto => produto.preco >= 500 
const fragil = produto => produto.fragil
/* 
Solução do professor, como minha base é de criar os programas para a solução sem usar funções
a resolução do professor é bem diferente pois é totalmente focada em funções, tenho que estudar mais
a forma do professor resolver os exercicios.
*/
console.log(produtos.filter(caro).filter(fragil))