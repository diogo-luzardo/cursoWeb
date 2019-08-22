const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) // Neste exemplo ele cria o Objeto filha1 como prototype do objeto pai.
filha1.nome = 'Ana'
console.log(filha1.corCabelo)/* Saída = Preto, aqui verificamos que o objeto filha1 não tem o atributo corCabelo, porém no objeto pai temos este 
atributo com o valor atribuido em Preto, por isso a saída é Preto. */

const filha2 = Object.create(pai, {
    nome: {value: 'BIA', writable: false, enumerable: true}
})

console.log(filha2.nome)// Mostrando o nome no console.
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)//Aqui mostrando a herança pois a filha2 não tem o atributo corCabelo, herdou do Pai.
filha2.nome = 'Carla' // Testando mais uma vez a função writable setada em false, ou seja não se altera como o freeze.

console.log(Object.keys(filha1)) // Mostrando o valor chave dos objetos.
console.log(Object.keys(filha2)) // No caso de filha2 só conseguimos ver a chave pois o enumerable está como true, se não viria vazio no console.

for(let key in filha2){
    filha2.hasOwnProperty(key) ?// Neste for ele vai varrer todas as chaves do objeto filha2 e com o metodo hasOwnProperty conseguimos saber se é herdado.
        console.log(key) : console.log(`Por herança: ${key}`)
}

