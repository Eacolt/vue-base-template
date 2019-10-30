const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')
const portfinder = require("portfinder")
const webpack = require('webpack')
const path = require('path')
module.exports = portfinder.getPortPromise().then((port)=>{
    return merge(webpackConfig,{
        mode:'development',
        devtool:'cheap-module-eval-source-map',
        module:{
            rules:[
                {
                    test:/\.(css|less)/,
                    use:[
                        {
                            loader:'vue-style-loader'
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
            host:'192.168.249.127',
            port:port,
            open:true,
            hot:true,
            contentBase:path.resolve(__dirname,'../public')
    
        },
        plugins:[
            new webpack.DefinePlugin({
                'process.env.baseURL':JSON.stringify('.')
            })
        ]
    })
});
