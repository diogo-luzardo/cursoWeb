const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
/* A função acima imprimi o nome e o indice de uma lista, neste exemplo
usamos a lista fabricantes - o CallBack, roda como o laço, verifica
a condição executa e volta pra executar novamente, enquanto tiver
valor na lista*/

fabricantes.forEach(imprimir)
//o forEach é uma função da lista fabricante que pega cada elemento na lista
console.log('------------------')
fabricantes.forEach(fabricante => console.log(fabricante))
/* Neste exemplo criamos uma função arrow que mostra os valores do 
array fabricantes.*/

console.log('------------------')

const minhaFamilia = ['Arthur', 'Pietra', 'Aline', 'Diogo']
minhaFamilia.forEach(familia => console.log(familia))

