// Usando a notação literal:
const obj1 = {}
console.log(obj1)

// Object em JavaScript:
console.log(typeof Object, typeof new Object())
//Verificando o tipo do objeto apenas objeto e usando o new, saída do console abaixo:
//{} function object
// Outra forma de criar objeto:
const obj2 = new Object
console.log(obj2)
/*
{}
function object
{} 
*/
// Funções construtoras:
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())
// Saída do programa até aqui
/*
{}
function object
{}
6.7915
2249.2425
 */

// Função Factory:
function criarFuncionario(nome, salarioBase, faltas){
    return { //-> Objeto literal igual primeiro exemplo.
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(`Salario João: ${f1.getSalario()}, Salario Maria: ${f2.getSalario()}`)

// Object.create:
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

// Enteder melhor o JSON