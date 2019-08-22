function area (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }

}
console.log(area(2, 2))
//Passando os valores para largura e altura, saída será 4
console.log(area(2))
/*Passando apenas um valor para largura como altura não recebe nenhum valor
ele é undefined, sendo assim 2 * undefined é igual a un Not a Number.*/
console.log(area())
/*Saída NaN(Not a Number).*/
console.log(area(2, 3, 17, 22, 44))
/*Aqui mostramos que mesmo passando uma quantidade acima dos valores da função
o JS não da erro e usa apenas os 2 primeiros e a saida é 6.*/
console.log(area(5,5)) 
/*Neste casa o valor é superior a 20 é nossa função tem uma condição if
para mostrar valor acima do permitido, porém temos um return area vazio
e como não definimos nada para está condição o valor será undefined.*/


