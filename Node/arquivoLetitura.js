const fs = require('fs')//Modulo que já vem instalado no Nodejs

const caminho = __dirname + '/arquivo.json'//__dirname representa o diretorio atual

//sincrono
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

//assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//OU

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos)=> {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})