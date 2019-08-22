/* A função loadIncludes utiliza o parametro parent e na linha do if verificamos se 
o paramentro esta vazio, se vazio o mesmo verifica no body do HTML.
Na próxima linha jogamos os valores em parent para dentro do jQuery possibilitando
utilizar suas funções o find vai procurar todos os elementos que possui a propriedade
wm-include logo em seguida farezemos o forEach do jQuery que se chama each, atribuindo
a function com os paramentros "i" para o indice e o "e" para os elementos, dentro
desta function criamos a constante url que recebe o valor atribuido em "e" que é exatamente
a URL => /pages/template/header.html essa url vem do arquivo index.html via comando do 
jQuery attr, se refere ao atributo referenciado pelo wm-include.

Agora que temos a URL faremos a requisição ajax passando a url e uma função callback recendo 
o paramentro data quando a conexão é bem sucedida como o comando success faz.

Depois de efetuar a conexão com sucesso agora temos o data com o conteudo do arquivo header.html
e dentro do "e" temos o conteudo em HTML, agora que pegamos todo o conteudo e inserido em data, 
apagamos o conteudo dentro de "e"

No fim chamamos a propria função para assim criar uma recursividade com o paramentro "e" que 
neste momento do código esta vazio

*/

import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()