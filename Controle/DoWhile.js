function getNumberRandom(min, max){
    const valor =  Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getNumberRandom(-1, 10)
    console.log(`Opção escolhida ${opcao}`)
}while (opcao != -1)

console.log('Até a próxima!')