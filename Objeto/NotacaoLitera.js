// Melhorias da Notação literal a partir do ECMScript 2015
const a = 1
const b = 2
const c = 3
const obj1 = {a: a, b: b, c: c} // -> A recebe o valor da constante a, e B recebe da b e assim por diante.
const obj2 = {a, b, c} //-> mesma coisa que acima da forma nova abreviada com o ecma2015.
//Observamos que a saída do consele será a mesma.
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
//Saída do console para este objeto: { Nota: 7.87 }

//Outro exemplo:
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)
//Saída será exatamente a mesma: { Nota: 7.87 }
const obj5 = {
    funcao1: function(){ // ->Forma antiga.
        // ... paramentros da função
    },
    funcao2(){ //->Forma nova.
        // ... paramentros da função
    }
}
console.log(obj5)

