const path = require('path');
const webPackHtmlPlugin = require('html-webpack-plugin');

// i need to create a dist directory
module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
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
    new webPackHtmlPlugin({
      template: './src/index.html'
    })
  ]
};
