const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) pelo terminal podemos testar esse console assim: node nome do arquivo - a

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')
        /*Linha interesante aplica o que recebeu do teclado para string e subistitui o enter no caso''\n
        por um spaço vazio*/
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
//para teste esse if mesma coisa que acima rodar o programa pelo terminal com a flag -a 
