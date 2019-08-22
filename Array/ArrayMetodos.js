const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro - pop remove o ultimo elemento do array.
console.log(pilotos)
//Saída do console -> [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')//Adicionando um novo elemento ao Array.
console.log(pilotos)
//Saída do console. -> [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift()//Vettel quebrou o carro - shift remove o primeiro elemento da lista.
console.log(pilotos)
//Saída do console -> [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton')//unshift adiciona elementos na primeira posição do array.
console.log(pilotos)
//Saída do console -> [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ].

//splice pode adicionar e remover elementos do array.

//ADICIONANDO
pilotos.splice(2, 0, 'Bottas', 'Massa') //Ele adiciona apartir do indice 2 do Array o Bottas e o Massa.
console.log(pilotos)
//Saída do console -> [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

//REMOVENDO a partir do splice
pilotos.splice(3, 1)// Massa quebrou novamente.
console.log(pilotos)
//Saída do console -> [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array neste caso inciando do indice 2 do array pilotos.
console.log(algunsPilotos1)
//Saída do console -> [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4)/* Pega valores a partir do indice 1 até o indice 3 pois como na 
maioria das linguagens o ultimo valor é -1 ou seja 3*/
console.log(algunsPilotos2)
//Saída do console -> [ 'Alonso', 'Bottas', 'Raikkonen' ]

