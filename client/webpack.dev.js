const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true,
    inline: true,
    /*proxy: {
      '/api': 'http://localhost:5000',
      '/auth': 'http://localhost:5000'
    },*/
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    host: 'localhost',
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    disableHostCheck: true,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
