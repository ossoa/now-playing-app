var webpack = require('webpack');

var config = {
  entry: ['./app/main.jsx'],
  resolve: { alias: {} },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },

      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};

module.exports = config;
