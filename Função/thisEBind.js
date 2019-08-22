const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()/*Até aqui tudo normal, foi criado a função falar dentro da variavel
const pessoa, e chamamos a função e a saída é Bom dia.*/

const falar = pessoa.falar
/*Aqui jogamos a constante e a função pessoa.falar dentro de outra constante
falar, e quando chamamos a nova função dentro da nova variavel acontece o erro
pois o this dentro do primeiro escopo agora está em outro escopo apresentando
o erro de undefined*/

falar()//Vai dar erro, conflito entre paradigmas: funcional e POO(Programação origentada a objetos.)


//Exemplo de como consertar o problema acima!

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar.bind(pessoa)
falar2()