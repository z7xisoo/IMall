const webpack = require('webpack');
const { resolve } = require("path");
const merge = require('webpack-merge');
const webpackCommon = require("./webpack.common");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(webpackCommon, {
    mode:"development",
    devtool:"cheap-eval-source-map",
    devServer:{
        hot:true,
        contentBase:resolve("./dist"), // 设置服务器访问的基本目录
        host:"127.0.0.1", // 服务器地址
        port:8080, // 端口
        open:true, // 是否自动打开页面
        quiet: true
    },
    plugins: [
        new CleanWebpackPlugin(), // 需要清理緩存的文件
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})