module.exports = function(...nome){ //... é um argumento variavel onde vc pode passar quantos valores vc quiser.
    return nome.map(nome => `Boa semana, ${nome}!`)
}