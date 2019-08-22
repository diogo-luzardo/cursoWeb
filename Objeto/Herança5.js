console.log(typeof String)// Objetivo de veirifar essas funções é mostrar que todas elas tem seu prototype.
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){ // Não existe o metodo reverse para objeto ou função então criamos a função com os parametros da string.
    return this.split('').reverse().join('')
    //split = metodo split que gera um array
    //reverse = metodo reverse que inverte o array
    //join = gera um novo array
}

console.log('Escola Cod3r'.reverse()) //-> Saída das função reverse criada acima com os metodos de String 'r3doC alocsE'.

Array.prototype.first = function(){ // -> Função simples para pegar o primeiro paramentro do array
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())// -> Criando o array e usando a função first criada acima para mostrar o primeiro valor do array.
console.log(['a','b','c','d','e'].first())//-> Mesma coisa

String.prototype.toString = function(){// Não faça isso, apenas exemplo de que isso substitui o metodo toString.
    return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse())