//Função factory criando produtos
function criarProduto (produto, preco){
    return {
        produto, 
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Mouse', 15.00))
console.log(criarProduto('Ipad', 1550.00))
