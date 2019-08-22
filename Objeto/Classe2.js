class Avo { //Classe avo para exemplo de herança
    constructor(sobrenome){ //Função construtora com paramentro sobrenome.
        this.sobrenome = sobrenome// this.sobrenome recebe o paramentro sobrenome da função construtora.
    }
}

class Pai extends Avo { // Usando o metodo extends para criar o vinculo com a class avo, ou seja estebelece uma relação de prototipo.
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)//Usando o metóto super para chamar a função construtora da super classe que no caso é o AVO.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
//Saída -> Filho { sobrenome: 'Silva', profissao: 'Professor' }