const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('----------------')

for (let y in nums){
    if (y == 5) {
        continue
    }    
    console.log(`${y} = ${nums[y]}`)
}

/*
Saída do programa, podemos notar que no caso do break
o programa para quando chegamos na posição 5 do array,
no caso do continue ele chega na posição 5 pula e depois
continua com o for.
----------------
0 = 1
1 = 2
2 = 3
3 = 4
4 = 5
----------------
0 = 1
1 = 2
2 = 3
3 = 4
4 = 5
6 = 7
7 = 8
8 = 9
9 = 10
*/
console.log('-------------')

externo: for (a in nums){
    for (b in nums){
        if(a ==2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`) //Não usar!
    }
}
console.log('Fim!')

/* 
Neste exemplo foi criado um label chamado externo, pois o break termina
com o laço mais proximo a ele, para terminar o primeiro laço atribuimos o label
externo ao laço e na hora de finalizar indicamos ao break o label do laço
que queremos fechar.
*/