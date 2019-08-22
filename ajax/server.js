const bodyParser = require('body-parser')//Importando o modulo body parser.
const express = require('express')//Importando o modulo express.
const app = express()//chamando a função do express e inserindo em uma variavel.

app.use(express.static('.'))/* Nesta linha estamos disponibilizando via express todos os
aquivos estaticos na raiz do pasta do servidor*/
app.use(bodyParser.urlencoded({extended: true}))/* Middleware para fazer o bodyparse, esse código
é responsavel por transformar o que vier da url em objeto*/
app.use(bodyParser.json())/* Este middleware a mesma coisa que acima, porém quando o dado vier de um
JSON*/

app.get('/teste', (req, res) => res.send(new Date))/* Esta função middleware que vai ser chamada
quando o /teste for invocada via requicisão GET*/

const multer = require('multer')/* Este modulo interpreta o formulario do arquivo que veio do upload */
const storage = multer.diskStorage({/*Função diskStora do multer recebe um objeto e a partir disso vc consegue mudar nome e local
de salve*/
    destination: function(req, file, callback) {
        callback(null, './upload')
        /*Destino onde vai salvar o aquirvo que vier da requisição ajax*/
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
        /*formatando o nome do aquivo*/
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    /* Existem duas formas no express de pegar uma requisição do navegador/frotend:
    1º - req.body 
    2º - req.query
    3º - req.params
    */
   const par = parseInt(req.query.numero) % 2 === 0 
   res.send({
       resultado: par ? 'par' : 'impar'
   })
})

app.listen(8080, () => console.log('Executando...'))/*Estartando o servidor na porta 8080*/