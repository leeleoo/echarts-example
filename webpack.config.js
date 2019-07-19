const path                   = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin      = require('html-webpack-plugin')
const webpack                = require('webpack')
module.exports               = {
  entry    : './src/index.js',
  output   : {
    filename: 'main.js',
    path    : path.resolve(__dirname, 'dist')
  },
  devtool  : 'inline-source-map',
  devServer: {
    contentBase: './',
    hot        : true
  },
  plugins  : [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title   : 'Management',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
