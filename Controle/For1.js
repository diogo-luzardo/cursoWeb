let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador ++
}

//Transformando a estrutura acima em FOR.

for (let i = 1; i <= 10; i ++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i ++){
    console.log(`nota = ${notas[i]}`)
}
//Usando o for para pegar os itens dentro do Array.