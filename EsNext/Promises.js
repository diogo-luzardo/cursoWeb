function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    }) 
}

falarDepoisDe(2, 'Que legal!')
    .then(frase => frase.concat('!!!'))//-> tem passa de um para outro, por o nome da variavel muda mas ele recebe o valor anterior
    .then(outraFrase => console.log(outraFrase))
    //Para fazer o tratamento de erro temos que usar a linha abaixo.
    //E trocar acima o resolve por rejects.
    //.catch(e => console.log(e))
