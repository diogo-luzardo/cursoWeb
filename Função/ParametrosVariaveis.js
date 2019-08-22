/* Neste exemplo a função é criada sem argumentos e criamos um exemplo com soma
iniciamos a soma em 0 depois fazemos um for para varrer o array arguments
depois somamos os valores que estão dentro do array.*/

function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}


console.log(soma())
//Saída deste console é 0 pois 0 + 0 = 0.
console.log(soma(1))
//Saída deste console é 1 pois 1 + 0 = 0.
console.log(soma(1.1, 2.2, 3.3))
//Saída deste console é 6.6.
console.log(soma(1.1, 2.2, "Teste"))
//Saída deste console é 3.3Teste, pois o + em String faz a concatenação.
console.log(soma('a', 'b', 'c'))
//Saída deste console é 0abc, como a variavel soma é iniciada em 0 a soma faz a concatenação.
