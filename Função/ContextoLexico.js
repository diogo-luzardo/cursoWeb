const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/* Neste exemplo mostramos como a função tras consigo o conseito lexico
de posicionamento da variavel, como a variavel valor recebeu o conteudo
Global no contexto global a função minhafuncao quando chamada por outra
funcao no caso a exec ela mantem o valor Global dentro da variavel. */