/* 
No caso deste exemplo mesmo o this sendo executado pela função setInterval
ele mantem o contexto lexico devido o Arrow Function e o código funciona 
sem problemas.

*/

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa