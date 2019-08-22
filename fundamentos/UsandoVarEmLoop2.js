const funcs = []

for (var i =0; i < 10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

/*Como a variavel var é global ela sempre mostra o valor
que tornou a condição verdadeira, neste caso o 10, então a saída da função é
10 para ambos os casos.
*/
