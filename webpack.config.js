const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      }
    ]
  },
  resolve: { extensions: ['.js'] },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    stats: 'minimal'
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.ejs',
      RECAPTCHA_API_KEY: process.env.RECAPTCHA_API_KEY
    }),
    new DotenvWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }
      ]
    })
  ]
};
