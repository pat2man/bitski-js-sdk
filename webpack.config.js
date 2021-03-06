const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

var libraryName = 'bitski';
var outputFile = libraryName + '.js';

var config = {
  devtool: 'source-map',
  entry: __dirname + '/src/bitski.ts',
  externals: {
    'oidc-client': 'Oidc'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd'
  },
  plugins: [
    new TypedocWebpackPlugin({
      out: '../docs/api',
      module: 'commonjs',
      readme: 'none',
      theme: 'markdown',
      name: 'Bitski.js',
      mode: 'modules',
      includeDeclarations: false,
      excludeExternals: true,
      mdSourceRepo: 'https://github.com/OutThereLabs/bitski-js-sdk',
      mdSourceBranch: 'master'
    }, './src')
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};

module.exports = config;
