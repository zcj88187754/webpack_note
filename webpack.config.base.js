const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } =  require('webpack-bundle-analyzer')
const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')


module.exports = {
    entry:{
        index: './src/index.js',
        search: './src/search.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]'
    },
    module:{
        rules:[
            {
                test: /\.png$/,
                type: 'asset/resource',
                // 定义了generator后，它的优先级高于assetModuleFilename
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline' // 编译成base64
            },
            {
                test: /\.txt$/,
                type: 'asset/source' // 编译成文本文件
            },
            {
                test: /\.jpg$/,
                type: 'asset', // 在文件资源或者base64上切换，默认情况下大于8K生成文件
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024 * 200 //400KB为临界值
                    }
                }
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader']
            },
            {
                test: /\.(.woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader'
                ]
            },
            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse : toml.parse
                }
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse : yaml.parse
                }
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse : json5.parse
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime'
                            ]
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash].css'
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization:{
        // 把公共的文件处理成一个单独文件
        splitChunks:{
            // cacheGroups将三方文件同意打包，不用经常变化的文件
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,// 抽离公共模块
                    name: 'chunk',
                    chunks: 'all'
                },
                common:{// ‘src/libs’ 下的js文件
                    chunks:"all",
                    test:/[\\/]src[\\/]libs[\\/]/,//也可以值文件/[\\/]src[\\/]libs[\\/].*\.js/, 抽离自己的库
                    name: "common", //生成文件名，依据output规则,
                    minChunks: 1
                }
            }
        }
    }
}