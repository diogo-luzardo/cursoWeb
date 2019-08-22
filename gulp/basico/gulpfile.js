const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    /* Entre a criação da pastaB e a copia dos arquivos normalemente vc teria as tranformaçoes 
    que vc faria nos arquivos, neste exemplo não estamos alterando nada do arquivo, apenas
    copiando */
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim 2!!!')
})