//console.log(global)
global.MinhaApp = Object.freeze( { //Congelando o objeto para não ser alterado.
    saudacao() {
        return 'Estou em todos os lugares.'
    },
    nome: 'Sistema Legal'
})