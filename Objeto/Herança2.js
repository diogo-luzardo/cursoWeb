// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // Não faça isso em casa!
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0)
console.log(filho.attr2)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324 // Efeito Shadowing ou sombreamento pois esse atributo vai alterar o atributo velMax anterior de 200 para 324. 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //-> Atributo super para usar o status do objeto volvo e não do objeto carro.
    }
}

Object.setPrototypeOf(ferrari, carro) //-> Método para atribuição de prototype ou herança entre os objetos.
Object.setPrototypeOf(volvo, carro)//-> Mesmo exemplo que acima.

console.log(ferrari)//-> Mostra o Objeto em si.
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())//-> Saída V40: 100Km/h de 200Km/h

ferrari.aceleraMais(300)
console.log(ferrari.status())// -> Saída 300Km/h de 324Km/h