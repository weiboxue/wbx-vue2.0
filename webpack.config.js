/**
 * Created by weiboxue on 17/2/14.
 */
//var ExtractPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    // “__dirname”是Node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    entry: {
        "demo": __dirname + "/assets/js/demo.js"
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist/js'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: "[name].js" //打包后输出文件的文件名
    },
    // loaders
    module: {
        rules: [
            //json
            {test: /\.json$/, loader: "json-loader"},
            // jade
            {test: /\.jade$/, loader: "jade-loader"},
            // css
            {test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader"},
            //{test: /\.css$/, loader: ExtractPlugin.extract("style-loader", "css-loader")},
            //// sass
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            // 处理.vue文件
            {test: /\.vue$/, loader: "vue-loader"}
        ]
    },
    //其它解决方案配置（这里是省略后缀名的的书写地方）
    resolve: {
        ////查找module的话从这里开始查找
        //root: __dirname + "/assets/js", //绝对路径
        ////自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        //extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            // 一些工具类第三方库文件等
            //js: path.resolve(__dirname + "/assets/js")
        }
    }
};
