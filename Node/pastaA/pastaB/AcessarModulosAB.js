const moduloA = require('../../ModuloA')//é possivel inserir o path ou endereço da pasta neste campo.
console.log(moduloA.ola)


const saudacao = require('saudacao')// Neste exemplo como criamos a pasta dentro do node modules 
//com index.js não precisamos mostra o caminho da pasta.
console.log(saudacao.ola)
/* Explicando esse exemplo pois criamos pastas e arquivos.
Para rodar esse este exemplo dentro da pasta node_modules
criamos a pasta saudacao assim sendo o node reconhece a pasta
como um novo modulo, e quando fazemos o uso deste modulo
o primeiro arquivo que ele procura é o index.js entãco criamos
o arquivo index.js e dentro adiconamos o objeto saudacao,
que importamos neste exemplo. */

/*Vamos falar de modulos core que são os modulos que ja vem com node.
por exemplo o modulo http*/

const http = require('http')
http.createServer((req, res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)
/*Neste exemplo usamos o serviço http do node para criar 
uma função que escreve bom dia na tela saindo pela porta 8080.
para verificar a saída basta ir no navegador abrir o localhost
na porta 8080.*/

const pastaC = require('./pastaC')
console.log(pastaC.ola2)
/* Neste outro exemplo criamos o arquivo index dentro de uma pasta nova
criada para o exemplo chamada de pastaC e dentro da pastaC criamos o arquivo
index.js, é possivel notar que não referenciamos o arquivo na chamada
pois por padrão ele procura primeiro pelo arquivo index, não havendo a
necessidade de especificar outro arquivo*/

