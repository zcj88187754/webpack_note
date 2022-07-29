const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    output:{
        filename: 'js/[name][contenthash].bundle.js',
    },
    mode: 'production',// development production none
    optimization:{
        minimizer: [
            
            new CssMinimizerPlugin(),
            // 压缩js代码
            new TerserPlugin(),
        ],
        usedExports: true
    }
}
