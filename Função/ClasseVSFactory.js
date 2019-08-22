console.log('------------------------')
console.log('CRIANDO UMA PESSOA ATRAVÉS DE UMA CLASS')
console.log('------------------------')

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log('------------------------')
console.log('CRIANDO UMA FUNÇÃO CONSTRUTOR')
console.log('------------------------')

const criarPessoa = nome => { 
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Diogo')
p2.falar()