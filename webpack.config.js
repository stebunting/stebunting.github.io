const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/'
  },
  plugins: [
    new DotenvWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.ejs',
      inject: 'body',
      RECAPTCHA_API_KEY: process.env.RECAPTCHA_API_KEY
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }
      ],
    }),
  ]
};
