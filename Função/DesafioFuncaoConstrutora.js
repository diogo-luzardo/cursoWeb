function Animal (nome){
    this.nome = nome
}

Animal.prototype.falar = function(){
    console.log(this.nome + 'Faça barulho!')
}

class Cachorro extends Animal{
    falar(){
        console.log(this.nome + 'emite um barulho.')
    }
}

var d = new Animal('Pietra ')
d.falar()

var a = new Cachorro('Arthur ')
a.falar()