const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/CMP_Demo/user_interface/index.js',
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
      template: './src/CMP_Demo/user_interface/index.html',
      filename: 'index.html'
    })
  ]
}
