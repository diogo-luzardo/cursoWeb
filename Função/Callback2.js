const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//Criando exemplos para mostra como o Callback é eficiente em alguns casos.

//Sem callback

const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

//Callback com arrow.

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Criando uma função que podemos utilizar em varios casos.

const notasMenorQue7 = nota => nota < 7

//Utilizando a condição no exemplo anterior.

const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)