function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

/*
Sáida da função:
a = undefined
a = 2
Ele não da erro apesar da variavel ter recebido o valor
depois de ser chamada pelo console, ai vem o efeito Hoisting que puxa ela pra 
cima.
*/