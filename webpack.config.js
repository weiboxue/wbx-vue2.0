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
    }
};
