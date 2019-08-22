class Lancamento { 
    constructor(nome = 'Genérico', valor = 0){//forma padrão de chamar a função construtora.
        this.nome = nome //O this nome, recebe o nome do parametro do objeto construtor.
        this.valor = valor //Mesma coisa que acima, só muda a variavel.
    }
}

class CicloFinanceiro {
    constructor(mes, ano){//Mesma coisa que acima, função contrutora e os paramentros necessarios.
        this.mes = mes
        this.ano = ano
        this.lancamentos = []//inciando um array vazio, para usar nos paramentros abaixo.
    }
    addLancamentos(...lancamentos){// os tres pontos se le, um ou mais valores que vc pode adicionar na lista lancamentos.
        lancamentos.forEach(l => this.lancamentos.push(l))/*Usando o foreach para pegar os valores em laçamentos, depois da um push nos
        valores que estão no lancamentos para o this.lancamentos que é o objeto da classe ciclofinanceiro via push*/ 
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor //Atribuição aditiva em valor, por ciclo ele adiciona na variavel.
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salario', 45000)//instanciando e atribuindo valor a classe Lancamento.
const contaDeLuz = new Lancamento('Luz', -220)//Mesma coisa que acima.

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())