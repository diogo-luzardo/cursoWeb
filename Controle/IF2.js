function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
console.log('------------')
teste1(8)

function teste2(num){
    if(num > 7);//Cuidado com o ';', não usar com estruturas de controle.
    //Neste caso o if não trata o console, pois o ';' é uma 
    //senteça de código e a condição aponta para o ';' e não para o console.
    {
        console.log(num)
    }
}
console.log('-----------')
teste2(6)
teste2(8)