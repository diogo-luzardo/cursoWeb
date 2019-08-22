const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//-> Mostra no console apenas as keys ou 'chaves' do Objeto pessoa.
console.log(Object.values(pessoa))//-> Mostra no console apenas as values ou 'valores' do Objeto pessoa.
console.log(Object.entries(pessoa))// -> Mostra no console a keys e os values separador por colchetes como se fosse lista dentro de lista.

Object.entries(pessoa).forEach(e => {//-> Criamos um forEach para cada varrer o Objeto e depois mostramos os indices dos valores.
    console.log(`${e[0]}, ${e[1]}`)
})// -> Saída no console é nome, Rebeca | idade, 2 | peso, 13.

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
//Exatamente igual a chamado acima da linha 11 a unica coisa que ao inves de chamar pelo indice do objeto chamamos pelo pelos valores chave e valor.
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //-> Propriedade que Enumera na lista de kyes ou chaves do objeto pessoa, vamos testar no console true e false.
    writable: false, //-> Propriedade que permite ou não a escrita ou reescrita do valor atribuido.
    value: '01/01/2019'// -> Valor atribuido.
})

pessoa.dataNascimento = '01/01/2017' // -> Como a propriedade dataNascimento do objeto pessoa esta como writable false ele não atribui esse valor.
console.log(pessoa.dataNascimento) // -> Saída será 01/01/2019, conforme explicação acima.
console.log(Object.keys(pessoa)) // -> Sáida com o enumerable em true é [ 'nome', 'idade', 'peso', 'dataNascimento' ]
// Saída com enumerable em false é [ 'nome', 'idade', 'peso' ]


// Object.assign (ECMAScript 2015)

const destino = { a: 1 }
const objeto1 = { b: 2 } // -> Neste exeplo criamos alguns objetos e depois atribuimos ao objetototal para mostrar essa nova funcionalidade do ECMAScript2015.
const objeto2 = { c: 3, a: 4}
const objetototal = Object.assign(destino, objeto1, objeto2)

Object.freeze(objetototal)//-> congelamos o objeto nesta linha.
objetototal.c = 1234 // -> depois de congelado tentamos atribuir outro valor e na saída mostramos que o freeze impede qualquer alteração.
console.log(objetototal) // -> Saída para console... { a: 4, b: 2, c: 3 }
