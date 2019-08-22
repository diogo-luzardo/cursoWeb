console.log(typeof Object)
//Neste casa o Object é uma função.
console.log(typeof new Object)
//Quando fazemos o instanciamento de uma função ela se torna um Objeto.

const Cliente = function(){}
//Criando uma função vazia.
console.log(typeof Cliente)
//Criando uma função sem instanciar nada a função continua função.
console.log(typeof new Cliente)
//depois de instanciar o resultado se torna um Objeto.

class Produto {} //A partir do Ecmoscrip 2015 (ES6).
//Class é praticamento a mesma coisa que a função.
console.log(typeof Produto)
//Saída vai ser função.
console.log(typeof new Produto())
//Depois de instanciar a função ela se torna um objeto.
