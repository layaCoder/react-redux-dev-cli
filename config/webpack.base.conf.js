'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss-loader');

module.exports = {
  // 入口起点
  entry: {
    app: './src/main.js',
  },
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].js",
  },
  // 解析
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  // loader
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,// 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            //outputPath: '../dist',// build输出**文件夹
            publicPath: '/',
            name: "images/[name].[ext]",
            limit: 500  //是把小于500B的文件打成Base64的格式，写入JS
          }
        }]
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          {
            loader: "style-loader" //在html中插入<style>标签
          },
          {
            loader: "css-loader",//获取引用资源，如@import,url()
          },
          {
            loader: "postcss-loader",
            options: {
              postcss: [require('autoprefixer')]
            }
          }
        ]
      },
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body'
    })
  ]
};