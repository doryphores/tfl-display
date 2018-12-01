const path = require('path')
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
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new CleanPlugin(['dist']),
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
