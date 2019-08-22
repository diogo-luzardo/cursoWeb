const nums = [1, 2, 3, 4, 5]

// O map é um for com proposito.
// O map não altera o array atual ele cria um novo array com as alterações propostas.
let resultado = nums.map(function(elemento){
    return elemento * 2
})

console.log(resultado)

const soma10 = elemento => elemento + 10// Neste exemplo o return esta implicito, não podemos criar funções com o map sem return
const triplo = elemento => elemento * 3//Em funções arrow o return esta implicito.
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}` 
//parseFloat tranforma pra float top fixe com duas casas decimais e replace . por , .
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

//Teste feito por mim para fixar o conteudo
function soma20(elemento){
    this.elemento = elemento
    return elemento + 20
}

teste = nums.map(soma20)
console.log(teste)

const dividirElementos = elemento => elemento / 2
dividopor2 = nums.map(dividirElementos)
console.log(dividopor2)
