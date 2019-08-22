/* informação importante neste arquivo usamos o padrão de modulos do node.js
e aqui podemos notar a diferença entre eles, sempre que quiser buscar um exemplo
podemos consultar este arquivo e o pessoa.js que esta utilizando o padrão de modulos
do ecmaScript2015 */

const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizaCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },

    devServer: {
        contentBase: "./public",
        port: 9000
    },

    optimization: {
       minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizaCSSAssetsPlugin({})
       ] 
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],

    module: {
        rules:[{
            test: /\.s?[ac]ss$/,/* Esta expressão faz com que seja encontrado arquivos com as seguintes
            extensões .css, .scss, .sass */
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',//Adiciona CSS a Dom injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]    
    }
}