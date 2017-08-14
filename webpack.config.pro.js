var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')


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
     },{
        test: /\.html?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
     }
   ]
 },
 plugins: [
   new ExtractTextPlugin("styles.css"),
   new OptimizeCssAssetsPlugin({
     assetNameRegExp: /\.optimize\.css$/g,
     cssProcessor: require('cssnano'),
     cssProcessorOptions: { discardComments: {removeAll: true } },
     canPrint: true
   }),
   new UglifyJSPlugin(),
 ],
}


module.exports = config
