const path = require('path');
const webpack = require('webpack');
const webPackHtmlPlugin = require('html-webpack-plugin');

const VENDOR_LIST = [
  // "faker","react-input-range"
  "lodash", "react",
  "react-dom",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-thunk"
];
// i need to create a dist directory
module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendors: VENDOR_LIST
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules:[
      {
        use: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/
      },
      {
        use:['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist')
  },

  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names:['vendors', 'manifest']
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin(),// reduce bundled sizes
    new webPackHtmlPlugin({
      template: './index.html'
    }),
  ]
};
