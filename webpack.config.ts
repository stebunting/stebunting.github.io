import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import DotenvWebpackPlugin from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
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
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    historyApiFallback: true
  },
  output: {
    publicPath: '/',
    filename: '[contenthash].js'
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

export default config;
