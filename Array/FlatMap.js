const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1 
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //Função para varer as notas de um objeto
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)/*Função para varer as turmas, usando as duas 
com o metodo map pegamos as notas das duas turmas. */

const notas1 = escola.map(getNotasDaTurma)//Tranzendo os valores para o array notas1.
console.log(notas1)
//Saída são os dois arrays com suas notas -> [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback){ // -> Criando a função flatMap
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
//Aplicando a função flatMap para chegar no mesmo resultado com menos trabalho que o exemplo acima.
console.log(notas2)
//Saída para o console -> [ 8.1, 9.3, 8.9, 7.3 ]
