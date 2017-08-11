var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")


var config = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      elements: path.resolve(__dirname, 'src/elements'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
     {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
     },{
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
     }
   ]
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}


module.exports = config
