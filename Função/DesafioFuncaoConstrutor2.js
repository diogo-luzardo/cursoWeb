function criarPessoa(nome){
    this.nome = nome
}

/*criarPessoa.prototype.falar() = function(){
    console.log(`Meu nome é ${this.nome}!`)
}*/

class pessoa extends criarPessoa{
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let newPerson = new pessoa('Diogo!')
newPerson.falar()