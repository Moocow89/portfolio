import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    devtool: 'source-map',
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
        
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        //generate extrenat css file with hash in name
        new ExtractTextPlugin({
            filename:'styles.css'
        }),

        //creates a seperate bundle
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //Create HTML file that inclues reference to bundle.js
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        //Eliminates duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        //Minify JS
        new webpack.optimize.UglifyJsPlugin(),
        
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
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /node_modules/,
            use: "file-loader?name=images/[name].[ext]"
        }]
    }
}