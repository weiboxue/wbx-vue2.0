/**
 * Created by weiboxue on 17/2/14.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');

module.exports = {
    //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    // “__dirname”是Node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    //页面入口文件配置 已多次提及的唯一入口文件
    entry: {
        "index": __dirname + "/assets/js/index.js"
    },
    //入口文件输出配置
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist/views'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: "[name]/[name].js" //打包后输出文件的文件名
    },
    // loaders
    module: {
        //在配置文件里添加JSON loader
        rules: [
            //json
            {test: /\.json$/, loader: "json-loader"},
            // jade
            {test: /\.jade$/, loader: "jade-loader"},
            // css  //loader: "style-loader!css-loader!autoprefixer-loader"}, // autoprefixer 自动补全
            {test: /\.css$/, use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })},
            // less loader: "style-loader!css-loader!less-loader"},
            {test: /\.less$/, use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })},
            // sass //loader: "style-loader!css-loader!sass-loader"},
            {test: /\.scss$/, use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })},
            // 处理.vue文件
            {test: /\.vue$/, loader: "vue-loader"}
            //{
            //    test: /\.js$/,
            //    loader: 'coffee-loader',
            //    /* 排除模块安装目录的文件 */
            //    exclude: /node_modules/
            //}
        ]
        //loaders: [
        //    //json
        //    {test: /\.json$/, loader: "json-loader"},
        //    // jade
        //    {test: /\.jade$/, loader: "jade-loader"},
        //    // css
        //    {test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader"},
        //    //{test: /\.css$/, loader: ExtractPlugin.extract("style-loader", "css-loader")},
        //    // less
        //    // autoprefixer 自动补全
        //    {test: /\.less$/, loader: "style-loader!css-loader!less-loader!autoprefixer-loader"},
        //    //// sass
        //    {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader!autoprefixer-loader"},
        //    // 处理.vue文件
        //    {test: /\.vue$/, loader: "vue-loader"}
        //]
    },
    /**
     *
     * 插件项
     * plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin 的插件，
     * 它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
     */
    plugins: [
        // ...
        commonsPlugin,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin("[name]/[name].css")
    ],
    //其它解决方案配置（这里是省略后缀名的的书写地方）
    resolve: {
        ////查找module的话从这里开始查找
        //root: __dirname + "/assets/js", //绝对路径
        ////自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        //extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            // 一些工具类第三方库文件等
            //js: path.resolve(__dirname + "/assets/js"),
            //component: path.resolve(__dirname + "/assets/component"),
            //style: path.resolve(__dirname + "/assets/style"),
            //// 库文件
            //Jquery: path.resolve(__dirname + "/assets/js/lib/jquery.js"),
            //Vue: path.resolve(__dirname + "/assets/js/lib/vue.js"),
            //Swiper: path.resolve(__dirname + "/assets/js/lib/swiper.js"),
        }
    }
};
