
module.exports = {
    output:{
        filename: 'js/[name].bundle.js'
    },
    mode: 'development',// development production none

    // 总共有7种source-map 去官网查询
    devtool: 'cheap-module-source-map',
    devServer:{
        static: './dist',
        compress: true, // 压缩代码
    }
}