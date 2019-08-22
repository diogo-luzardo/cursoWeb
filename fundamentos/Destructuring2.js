const [a] = [10]
/*Na primeira posição do array foi criada a variavel a
que recebe o valor 10*/
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
/* Mesma coisa que acima com mais elementos e com saltos
e elementos vazios para mostrar o que o JS faz.*/
console.log(n1, n3, n5, n6)

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
