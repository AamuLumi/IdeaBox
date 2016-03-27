'use strict';

let webpack = require('webpack');
let path = require('path');

let lessConstants = require('./less-constants');

module.exports = {
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'react-hot',
      exclude: /\w*_modules/
    },{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /\w*_modules/,
      query: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: ['babel-root-import']
        }
    }, {
      test: /\.less$/,
      loader: 'style!css!less?{"globalVars":'+ JSON.stringify(lessConstants)+'}'
    }]
  },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9940',
    'webpack/hot/only-dev-server',
    './Root'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
