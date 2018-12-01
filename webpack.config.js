const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const outputBase = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputBase
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin(['dist']),
    new MiniCssExtractPlugin(),
    new HtmlPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Departure board',
      appMountId: 'app'
    })
  ],
  devServer: {
    contentBase: outputBase
  },
  devtool: 'source-map',
}
