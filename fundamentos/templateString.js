const nome = 'Diogo'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //$ {} faz a interpolação da variavel dentro da string, como o F no python
console.log(concatenacao, template)

// Expressoes...
console.log(`1 + 1 = ${1+ 1}`)

//Criando uma função

const up = text => text.toUpperCase() //Função UP transforma o texto em maiscula
console.log(`Ei... ${up('cuidado')}!`) // Chamamos a função dentro da String
