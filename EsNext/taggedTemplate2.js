function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        //Esta linha se le assim: se não for um número retorne o próprio valor se for um valor númerico ele coloca o simbolo com duas casa decimais.
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)//Com a funcao real
console.log(`1x de ${preco} ou 3x de ${precoParcela}.`)//Sem a funcao real
