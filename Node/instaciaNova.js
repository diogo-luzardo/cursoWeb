// Uma factory retorna um novo objeto ou função
module.exports = () => {
    return{
        valor: 1,
        inc(){ //funcao incrementar
            this.valor++
        }
    }
}