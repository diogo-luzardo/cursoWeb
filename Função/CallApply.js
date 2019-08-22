function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
//Criando função para calcular o preço.
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
//Crianção de um objeto produto e atribunindo valor e desconto e atribuindo a função getPreco.
global.preco = 20
global.desc = 0.1
console.log(getPreco())
/*Chamando a função sem informar o produto e o preço, a saída desta linha é NaN, nas duas linhas acima
chamamos as variaveis que estão no escopo global pois foram iniciadas com o this*/
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//Exemplos de chamar a função via call e apply, nesta primeira opção não definimos paramentros e chamamos o objeto diretamente.
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
//Exemplos de call e apply passando paramentros e ai sim podemos verificar as diferencas entre call e apply.
console.log(getPreco.apply(global, [0.17, '$']))
//Exemplo chamando do global.