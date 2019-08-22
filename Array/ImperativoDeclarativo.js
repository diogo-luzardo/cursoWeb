const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Abordagem imperativa
let total1 = 0
for(let i = 0; i < alunos.length; i ++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)
//Saída é a media das notas, neste exemplo = 8.55



//Abordagem declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
//Saída aqui será igual acima ou seja 8.55
