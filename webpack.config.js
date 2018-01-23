const path = require('path');
const resolve = path.resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'web',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
        {
          loader:'babel-loader'
        }],
        exclude: /node_modules/
      },
      { test: /\.json$/,
        use: [
        {
          loader: 'json-loader'
        }]
      },
      {
        test: /\.scss$/,
        // use: [
        // {
        //   loader: 'style-loader' // creates style nodes from JS strings
        // },
        // {
        //   loader: 'css-loader' // translates CSS into CommonJS
        // },
        // {
        //   loader: 'postcss-loader'
        // },
        // {
        //   loader: 'sass-loader' // compiles Sass to CSS
        // }]
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }],
        })
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('assets/styles/main.css'),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
        ['~']: resolve(__dirname, 'src')
    }
  }
}
