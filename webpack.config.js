'use strict';

var path = require('path');
var webpack = require('webpack');

// TODO: Setup Istanbul https://medium.com/@drublic/testing-es6-modules-with-mocha-using-babel-with-browserify-e6f5514f66d3#.36smooh0q
module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    'index.ios': ['./src/main.ios.js'],
    'index.android': ['./src/main.android.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx|es6)$/,
        include: path.resolve(__dirname, 'src'),
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  }
};
