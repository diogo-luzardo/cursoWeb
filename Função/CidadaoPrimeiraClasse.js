//Função em JS é First-Class Object (Citizens)
//Higher-order function


// Criar uma função de forma literal

function fun1(){

}

//Armazenar em uma variável.
const fun2 = function(){}

//Armazenar em um array.
const array = [function (a, b) {return a + b}, fun1, fun2]
//Chamando a função dentro do array.
console.log(array[0](2, 3))
//Saída é 5, como descrito na função a + b.


//Armazenar em um atributo de objeto.(atributo é o que vem depois do ponto.)
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())


//Passar função como paramentro de outra função.
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})
//Neste caso executamos a função chamando o paramentro da própria função.



//Uma função pode retornar ou conter outra função.
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
//Realizando a soma de a, b, c, sendo que a e b são da primeira função e c da segunda.
/* No exemplo abaixo armazenamos a função soma dentro de uma variavel constante
e depois chamamos a variavel e a segunda função.
Exemplo:
*/
const cincoMais = soma(2, 3)
cincoMais(4)
console.log(cincoMais)/*Chamando a variavel o JS da a saída informando que é
uma Function*/
