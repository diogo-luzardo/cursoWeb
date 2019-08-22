/*

Neste exemplo comentado usamos o bind para corrigir o problema do this.

function Pessoa() {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000) 
}
new Pessoa
*/


/* 
Neste exemplo criamos uma constante com o nome de self e armazenamos o this'
dentro da constante e depois chamamos a constante no setInterval.
*/

function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000) 
}
new Pessoa