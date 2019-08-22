const escola = "Cod3r"
console.log(escola.charAt(4)) //Mostra a letra na posição 4 da string
console.log(escola.charAt(5))//Quando solicitamos um valor que não existe o Js retorna vazio
console.log(escola.charCodeAt(3))//Valor na tabela ASC
console.log(escola.indexOf('3'))//Mostra o indice/posição associado ao numero 3
console.log(escola.substring(1))//Vai da posição 1 até o final
console.log(escola.substring(0,3))//Vai da posição 0 até a posição 3
console.log('Escola '.concat(escola).concat("!"))//Concatenando string e variaveisa
console.log('Escola ' + escola + "!")//Concatenando com o Sinal de mais, por ser string da certo.
console.log(escola.replace(3, 'e'))// Substitui a posição 3 pela letra e
console.log('Ana, Maria, Pedro'.split(','))//Criamos um array com os 3 nomes separados por ','

