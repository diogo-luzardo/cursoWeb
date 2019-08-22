/* Exemplo para mostrar que a const não se altera, o que conseguimos manipular é o nome atribuido a pessoa
por issp da a impressão de alterar o nome, pois no console exibe o ultimo nome aplicado ao nome.*/

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
//pessoa = 'Aline' -> assim da erro, pq tentamos atribuir outro valor a pessoa que é  uma constante
console.log(pessoa)

Object.freeze(pessoa) //-> Como diz o nome congela o Objeto pessoa então o ultimo atributo valido para pessoa.nome é João.
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome // -> Mostrando que qualquer alteração em um objeto congelado não funciona, o Objeto não se altera.
console.log(pessoa.nome)
console.log(pessoa)

// Exemplo de criar o Objeto ja congelado na origem.
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria' //Não vai se alterar, conforme exemplos acima.
console.log(pessoaConstante)

