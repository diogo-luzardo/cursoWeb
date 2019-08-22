// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 6))

// Mesma função com corpo
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 2))

//Arrow Function com this.
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Paramentro Default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte!')

//Operador REST
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
