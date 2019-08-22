const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
/* Duvida minha, não estava entendo o fato do forEach pegar o nome o indice de foma automatico
agora na aula o professor falou que por padrão o forEach pega o valor e o indice,
por isso o primeiro parametro sempre será o valor e o segundo o indice. */

aprovados.forEach(function(nome, indice){//Usando uma função comum com paramentro, neste exemplo é possivel mostrar o nome e o indice.
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))//Usando o forEach com arrow funticon e sem parametros, neste exemplo conseguimos exibir apenas o valor.

const exibirAprovados = aprovados => console.log(aprovados)/* Criando uma variavel constante com o nome de exibirAprovados que recebe
o array com o nome de aprovados e criando uma função que imprimi os aprovados.*/
aprovados.forEach(exibirAprovados)
//Saída é o array de aprovados.

