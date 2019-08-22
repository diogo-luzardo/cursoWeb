/* Forma tradicional de escrever uma função.*/
let dobro = function (a) {
    return 2 * a
}
/*Arrow Function com return, funções arrow precisam ser armazendas em variaveis */
dobro = (a) => {
    return 2 * a
}

/*Arrow Function com o return implicito. */
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function (){ //-> se optar pelo bloco da função obrigatóriamente vc precisa do return, se nao ele retorna undefined
    return 'Olá'
}
//Refatorando a função ola para arrow.

ola = () => 'Olá'
ola = _ => 'Olá' /*Podemos criar com o underline pois a função está vazia
porém o underline é um parametro valído porém o JavaScript ignora funções 
sem valores, apenas para conhecimento.*/
console.log(ola())
