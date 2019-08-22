const sequencia = {
    _valor: 1, //Objeto iniciado em 1, abaixo criamos funções get e set para incrementar em 1 o objeto valor.
    //Convenção, pois o underline antes da variavel não quer dizer que ela é privada...isso mostra para os outros desenvolvedores
    // que você quer acessar essa variavel de forma interna. 
    get valor() {return this._valor++}, // ->Pega o valor e incrementa.
    set valor(valor) { //-> JavaScript não suporta sobrecarga de valor ou seja usar o mesmo nome para varios metodos, apenas neste exemplo isso é possivel.
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) //-> Chama o objeto sequencia e depois a função interna do objeto valor.
sequencia.valor = 1000 // -> atribuindo o valor 1000 agora pelo set e mostrando que a atribuição agora inicia em 1000. 
console.log(sequencia.valor, sequencia.valor)//Saída 1000 1001.
seguencia.valor = 900 // -> devido a condição do set ter if comparando os valores e 900 ser menor que 1000 esse linha é ignorada.
console.log(sequencia.valor, sequencia.valor)//Saída 1002 1003



        
        
        

           
