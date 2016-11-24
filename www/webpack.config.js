var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin=require('extract-text-webpack-plugin'); //css分离打包
// var precss       = require('precss'); //css分离打包
// var autoprefixer = require('autoprefixer'); //css分离打包

module.exports = {
    // plugins: [commonsPlugin],
    // devtool: "eval-source-map",   //配置生成Source Maps,选中合适的选项
    entry: {
       main: __dirname + "/app/main.js",  //唯一入口文件
       index: __dirname + "/app/index.js",
       testFlux: __dirname + "/app/testFlux.js",
       chardemo: __dirname + "/app/chardemo.js",
       antddemo: __dirname + "/app/antddemo.js"
    //    vendors: ['react','reflux','react-mixin']
    },
    output:{
        path:__dirname + "/www/JS",   //打包后的文件存放的地方
        filename: "[name].bundle.js"   //打包后输出文件的文件名，__dirname是Node.js的一个全局变量，指向当前执行脚本所在的目录
    },

    module:{
        loaders:[
            {
                test:/\.json$/,  //正则表达式，匹配以.json结尾的文件
                loader:"json"
            },
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react'],
                    env:[
                        ["react-transform",{
                            transform:"react-transform-hmr",
                            imports:["react"],
                            locals:["module"]
                        }]
                    ]
                }
            },
            
            {
                test:/\.css$/,
                loader:'style!css?modules'   //添加对样式表的处理
            },
            {
                test:/\.less$/,
                loader:'style!css!less'
            },
            {
                test:/\.scss$/,
                // loader: ExtractTextPlugin.extract('style','css!postcss-loader','sass') //css分离打包
                loader:'style!css!sass'
            }
        ]
    },

    // postcss: function () {     
    //     return [precss, autoprefixer];    //css分离打包
    // },

    plugins:[
        // new ExtractTextPlugin("[name].css")
        
    ],


    devServer:{
        contentBase : "./www",  //本地服务器所加载的页面所在的目录
        colors : true,          //终端中输出结果为彩色
        historyApiFallback : true,  //不跳转
        inline:true,     //实时刷新
        port: 7777,       //设置端口号
        hot:true            //热加载
    }
}