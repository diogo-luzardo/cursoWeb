function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

const obj = { max: 50, min: 40}
//Criando o Objeto antes de usar o console.
console.log(rand(obj))
console.log(rand({min: 955}))
//Criando o Objeto dentro do console.
console.log(rand({}))
//Com o objeto vazio ele varia entre 0 e 1000 que foram os valores previamente cadastrados.


