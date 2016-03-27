'use strict';

let path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  entry: './Root' // Your appʼs entry point
};
