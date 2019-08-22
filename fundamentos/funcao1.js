 // Funcao sem retorno
 function imprimirSoma(a, b){
    console.log(a + b)
 }
 //Criando uma função - Dica sempre usar bons nomes para suas funções.

//Chamando a função.
imprimirSoma(2, 3)
//Imprimi a soma de 2 + 3.
imprimirSoma(2)
//Como não informamos o valor para o posição b o JS considera como undifined e o resultado é Not a Number(NaN).
imprimirSoma(2, 10, 4, 5, 6, 7, 9)
//Neste exemplo temos mais valores que posições, o JS apenas iguinora os valores a mais e soma os dois primeiros.
imprimirSoma()

// Função com retorno.

function soma(a, b =0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


