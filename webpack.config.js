const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }, {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          'less-loader'
        ],
        include: /\.module\.less$/
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
        exclude: /\.module\.less$/
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    stats: 'minimal',
    historyApiFallback: true
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
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }
      ]
    })
  ]
};
