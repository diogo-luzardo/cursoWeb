//Mostrando que a varivel definida por var é visivel fora do bloco.

{
     {
          {
              { 
                  var sera = 'Será???' 
                  console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
    //Neste caso a varivel esta dentro de uma função e não temos acesso fora dela.
}
teste() //Pela função teste.
//Aqui funciona.
console.log(local) // fora da função.
//Aqui da erro.