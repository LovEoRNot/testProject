const webpack = require('webpack')
const path = require('path')
const MyPlugin = require('./scripts/myPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  devServer: {
    hot: true,
    port: 8000
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src')
        ],
        use: [
          'babel-loader',
          {
            loader: path.resolve(__dirname, './scripts/myLoader.js'),
            options: {
              name: 1
            }
          }
        ]
      }, {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MyPlugin({ name: 'my' }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      title: 'test'
    })
  ]
}
