require('./Global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita'/*Alterando o atributo nome que esta no arquivo global
tomar cuidado com isso, pois o objeto esta no escopo global e passivel de alteracao
de quaquer lugar. */
console.log(MinhaApp.nome)
/*Na saída deste console é possivel notar que ao invéz de sistema legal,
que foi atribuido no arquivo de criação do objeto, notamos que ele imprimi
eita, ou seja alteramos o objeto a partir deste arquivo. */

//Metodo para corrigir isto é usar o freeze no objeto.
//Agora a saída é sistema legal