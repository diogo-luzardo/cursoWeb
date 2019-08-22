const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra.')
            break 
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recupeção.')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')  
            break  
        default:
            console.log('Nota inválida')
    }
}
/*
No caso do switch quando sua condição entra no switch ele executa todos os
 cases abaixo dele, a unica forma de parar isso é usando o break conforme
 exemplo acima.
 */

 imprimirResultado(10)
 imprimirResultado(8.9)
 imprimirResultado(6.55)
 imprimirResultado(2.3)
 imprimirResultado(-1)
 imprimirResultado(11)


