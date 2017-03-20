// In webpack.config.js

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglify-js-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body',
  links: [
    'https://fonts.googleapis.com/css?family=Roboto',
  ]
});
var UglifyJsPluginConfig = new UglifyJsPlugin({
  compress: {
      warnings: false
  }
});
module.exports = {
  entry: [
    './client/main.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: [ /\.js$/, /\.jsx$/ ], loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader','sass-loader' ], exclude: /node_modules/  }
    ]
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) { 
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  plugins: [HTMLWebpackPluginConfig,UglifyJsPluginConfig]
};

