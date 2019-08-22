const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/* 

O operador Ternario precisa de 3 elementos no caso do exemplo acima
criamos uma função arrow e após a função temos o operador ternario 
(nota >= 7 ? 'Aprovado': 'Reprovado') neste exemplo se a condição for
verdadeira o aluno é aprovado se for falso o aluno é reprovado.

*/

/*

const resultado = nota =>{
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
Outra forma de fazer

*/

console.log(resultado(7.1))
console.log(resultado(6.0))