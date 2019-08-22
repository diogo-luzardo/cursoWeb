// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)
//PEgando os dados nome e idade do Objeto pessoa.
const {nome: n, idade: i } = pessoa
console.log(n, i)
//Criando novas variaveis no momento de pegar os dados no Objeto pessoa.
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
//Buscando dados que não existe no Objeto pessoa.
const { conta: { ag, num }} = pessoa
console.log(ag, num)

