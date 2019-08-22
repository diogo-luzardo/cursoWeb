const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') 
/* 
Java script não mostra erro na situação de comparar string com inteiro;
temos que tormar mais cuidado com linguagens fracamente tipadas.
*/