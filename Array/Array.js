console.log(typeof Array, typeof new Array, typeof [])
//Saida do primeiro typeof é funtion e do segundo usamos o new para instanciar a função então a saída é Objeto.
//Saída do tereceiro é objeto.

//Forma de criar array em javascript

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
//Saída do console -> [ 'Bia', 'Carlos', 'Ana' ]
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
//Saída do console -> Bia
console.log(aprovados[1])
//Saída do console -> Carlos.
console.log(aprovados[2])
//Saída do console -> Ana
console.log(aprovados[3])
//Saída do console -> undefined
aprovados[3] = 'Paulo'//-> Adciona o Paulo no indice 3 do meu array.
console.log(aprovados[3])
//Saída do console -> Paulo
aprovados.push('Abia')// -> Adciona via push o Diogo na primeira posição vazia, neste caso indice 4.
console.log(aprovados[4])
//Saída do console -> Diogo
console.log(aprovados.length)//Verifica o tamanho do array.
//Saída do console -> 5
aprovados[9] = 'Rafael'//Adiciona o Rafael na posição 9 do array, mesmo não tento valores nas posições anteriores.
console.log(aprovados[9])
//Saída do console -> Rafael
console.log(aprovados.length)//Verifica o tamanho do array.
//Saída do console -> 10
console.log(aprovados)
//Saída do console -> [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Diogo', <4 empty items>, 'Rafael' ]
console.log(aprovados[8] === undefined)
//Saída do console -> true
aprovados.sort()// Ordena os valores do Array.
console.log(aprovados)
//Saída do console -> [ 'Ana', 'Bia', 'Carlos', 'Diogo', 'Paulo', 'Rafael', <4 empty items> ]
delete aprovados[1]// Exclui o valor do array na posição 1.
console.log(aprovados[1])
//Saída do console -> undefined
console.log(aprovados[2])
//Saída do console -> 
console.log(aprovados)
//Saída do console -> [ 'Ana', <1 empty item>, 'Carlos', 'Diogo', 'Paulo', 'Rafael', <4 empty items> ]

//Criando novamente o array pra ficar mais organizado para estudar depois.
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)//Função splice, serve pra adionar e remover elementos e adiciona e remove ao mesmo tempo.
//Neste exemplo ele remove o elemento 1, o 1, 1 mostra que ele incia em 1 e para em 1.
console.log(aprovados)
//Saída do console -> [ 'Bia', 'Ana' ]
//Podemos notar que desta vez diferentemente do delete o splice removeu o elemento e indice tranformando o array de 3 valores para 2.
aprovados = ['Diogo', 'Arthur', 'Aline']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')/* Neste outro exemplo o splice vai excluir inciando em 1 e parando em 2, e logo
em seguinda ele adiciona os elementos nas respctivas posições. */ 
console.log(aprovados)
//Saída do console -> [ 'Diogo', 'Elemento1', 'Elemento2' ]