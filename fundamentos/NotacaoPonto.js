console.log(Math.ceil(6.1))
/*O objeto Math usando a notação ponto para chamar uma função deste objeto
no caso ceil que arrendonda pra cima*/
const obj1 = {}
//Criando o objeto.
obj1.nome = 'Bola'
//Usando a notação ponto para adicionar o nome e valor para o objeto.
obj1['nome'] = 'Bola2'
//Adicionando o nome e valor usando a notação colchetes.
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
//Usando a notação ponto para acessar pelo nome os membros dentro do objeto.
console.log(obj3.nome)
