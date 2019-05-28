const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')

module.exports =  merge(webpackConfig,{
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.(css|less)/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                    },
                    {
                        loader:'less-loader',
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                
                               require('autoprefixer')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        host:'localhost',
        port:8000,
        open:true,
        hot:true

    }
})