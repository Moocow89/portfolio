import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';



export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
         new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
        }),
         new ExtractTextPlugin({
             filename:'[name].css', 
             allChunks: true
         }),
         new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
            noInfo: false,
            options: {
                context: __dirname
             }
        })
    ],
  module: {
        rules: [{
            test: /\.html$/,
            exclude: /node_modules/,
            use: 'html-loader'
        },{    
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            exclude: /node_modules/,
            use: "file-loader?name=images/[name].[ext]"
        }]
    },
    resolve: {
        alias: {
             jquery: 'jquery/src/jquery'
        }
    }
    
        

   
}
