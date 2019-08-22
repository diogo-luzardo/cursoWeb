const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')//axios é um cliente http que faz requisições remotas.

//Desafio para pegar a mulher chinesa com menor salario, da url acima.
const chineses = f => f.pais === 'China' //Função que pega as pessoas da China.
const mulheres = f => f.genero === 'F'//Função que pega as pessoas do sexo feminino.
const menorSalario = (func, funcAtual) => { //Função redutora para pegar apenas o menor salario.
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(Response => {
    const funcionarios = Response.data
    //console.log(funcionarios)

    //Mulher chinesa com menor salario!
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})


