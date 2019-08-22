//Não aceita repetição/Não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
console.log(times.delete('Flamengo'))
console.log(times.has('Flamengo'))

const nomes = [ 'Raquel', 'Lucas', 'Julia', 'Lucas']
const nosesSet = new Set(nomes)
console.log(nomesSet)
