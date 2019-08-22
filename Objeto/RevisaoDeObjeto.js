//Objeto é uma coleçao dinamica de pares chave / valor.

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
//Saída dos testes até aqui
//{ nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }


//Continuando os testes:
delete produto.preco
delete produto ['marca do produto']
console.log(produto)
//Saída até aqui.
//{ nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function (){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante!'
//Duas formas de alterar um atributo de um objeto complexo, usando notação ponto e por array.
console.log(carro)
//Saída do console.
/* { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
{ nome: 'Cadeira' }
{ modelo: 'A4',
  valor: 89000,
  proprietario:
   { nome: 'Raul',
     idade: 56,
     endereco: { logradouro: 'Av Gigante!', numero: 1000 } },
  condutores:
   [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],*/

delete carro.condutores
console.log(carro)
//Awui vamos deletar todos os contudores.
//Saída do console.
/*{ modelo: 'A4',
  valor: 89000,
  proprietario:
   { nome: 'Raul',
     idade: 56,
     endereco: { logradouro: 'Av Gigante!', numero: 1000 } },*/
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
//Depois de deletar o endereço e a função.
//Segue saída.
/* { modelo: 'A4',
  valor: 89000,
  proprietario: { nome: 'Raul', idade: 56 } }*/
console.log(carro.condutores)
//Tentando acessar os condutores do objeto carro, porém excluimos, o js não dá erro apenas apresenta undefined
console.log(carro.condutores.length)
/*Tentando acessar o atributo tamanho de condutores que não exite mais ai sim o js da erro
comentando a linha que deleta o objeto condutores o tamanho é aprensetado*/
/**{ modelo: 'A4',
  valor: 89000,
  proprietario: { nome: 'Raul', idade: 56 },
  condutores:
   [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ] }
[ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ]
2 */
