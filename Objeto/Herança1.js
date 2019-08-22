const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) /* -> Este atributo __proto__ acessa o superObjeto ou objeto pai ou avó, se ele não encontrar o atributo dentro do proprio objeto
se não encontra ele vai subindo na hirarquia até encontrar ou trazer o resultado de vazio conforme esse exemplo onde ele traz um objeto vazio.*/
console.log(ferrari.__proto__ === Object.prototype)/* Neste outro exemplo ele verifica se o __proto__ é estritamente igual ao prototype e a saída sera
 que sim, ou TRUE */
console.log(volvo.__proto__ === Object.prototype)// -> Mesmo exemplo com o objeto volvo, Saída igual a TRUE.
console.log(Object.prototype.__proto__)// Verificando se o Objeto prototype tem alguem acima dele ou em nival mais alto e a saida é null.
console.log(Object.prototype.__proto__ === null)//Conforme exemplo acima onde vimos que a saida sera null, aqui verificamos se é estritamente igual a null, saida TRUE.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
