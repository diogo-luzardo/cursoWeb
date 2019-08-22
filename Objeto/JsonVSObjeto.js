const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) /* -> Saída da criação do JSON é '{"a":1,"b":2,"c":3}' podemos notar os valores do objeto agora estão no formato
de texto dentro do json, outra coisa é que função soma não aparecendo dentro do JSON, pois json não aceita funções ou execuções apenas texto. */

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) //-> ERRO
//Saída no console -> '{ a: 1, b: 2, c: 3 }' com erro no primeiro valor.
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c', 3}")) -> Erro mesma coisa que o anterior.
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
//Saída -> { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
//Saída -> { a: 1, b: 'string', c: true, d: {}, e: [] }
