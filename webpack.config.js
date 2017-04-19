// In webpack.config.js
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var UglifyJsPlugin = require("uglify-js-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/client/index.html",
  filename: "index.html",
  inject: "body",
  links: [
    "https://fonts.googleapis.com/css?family=Roboto",
  ]
});

// var ExtractTextPluginConfig=new ExtractTextPlugin({
//   filename: "bundle.css",
//   disable: false,
//   allChunks: true
// })
const path = require("path");

const config = {
  entry: "./client/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve:{
    alias: {
      Db: path.resolve(__dirname, "db/"),
    },
  },
  devServer:{proxy: {
    "/api": {
      target: 'http://jsonplaceholder.typicode.com',
      bypass: function(req, res, proxyOptions) {
        if (req.headers.accept.indexOf("html") !== -1) {
          console.log("Skipping proxy for browser request.");
          return "/index.html";
        }
      },
              changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
    }
  }},
  module: {
    rules: [
      { 
        test: [ /\.js$/, /\.jsx$/ ], 
        loader: "babel-loader", 
        // exclude: path.resolve(__dirname, "node_modules")
      }, 
      {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: [/\.scss$/, /\.css$/],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        }),
        // exclude: path.resolve(__dirname, "node_modules")
      }, 
      {
        test: /\.json$/, 
        use: "json-loader",  
      },      
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"
      }
    ]
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) { 
      // Function predicate that provides asset filenames
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    }
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  plugins: [
    HTMLWebpackPluginConfig,
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      allChunks: true,
    })
  ]
};
module.exports = config;

