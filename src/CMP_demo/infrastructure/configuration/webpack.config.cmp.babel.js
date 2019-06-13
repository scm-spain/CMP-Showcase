const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const OUTPUT_DIST_FOLDER = 'dist'
const ENTRY_PATH = './src/CMP_Demo/user_interface/index.js'
const TEMPLATE_PATH = './src/CMP_Demo/user_interface/index.html'

let webpackConfig = {
  entry: path.resolve(ENTRY_PATH),
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(TEMPLATE_PATH)
    }),
    new CleanWebpackPlugin([OUTPUT_DIST_FOLDER], {
      verbose: true,
      root: process.cwd()
    })
  ]
}

module.exports = (env, argv) => {
  return webpackConfig
}
