let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros ... ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos ... ')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar ... ')
console.log(!!('' || null || 0 || ' '))

//Exemplo

//Vamos cria uma variavel com nome vazio
let nome = ''
//Mostra no console o nome se ouver, ou desconhecido se nome for falso
console.log(nome || 'Desconhecido')
//Saída deste console é Desconhecido

//Outro exemplo
let nome2 = 'Diogo'
console.log(nome2 || 'Desconhecido')
//Saída deste console é Diogo, pois o nome é verdadeiro.

