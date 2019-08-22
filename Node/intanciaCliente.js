const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./instaciaNova')()
const contadorD = require('./instaciaNova')()
/*Neste exemplo temos que usar os parenteses no fim para pois até o primeiro estamos \
importando o objeto com os parenteses fechados ao final importamos a função*/

contadorA.inc()//Executando a função.
contadorA.inc()//Executando a função.
console.log(contadorA.valor, contadorB.valor)
//Saída para console -> 3 e 3.

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
//Saída para console -> 3 e 1.

/*No segundo caso que seria o exemplo de novas instancias que foram criadas a partir
de uma função factory e no primeiro caso simplismente importamos o objeto do node e
o node faz cache dos objetos e traz o mesmo valor*/