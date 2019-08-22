function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    /*operador logico 'ou' representado na linguagem pelo '||'*/
    const comprarTv50 = trabalho1 && trabalho2
    //Operador logico 'E' representado na liguagem pelo &&
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))