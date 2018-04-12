'use strict';

module.exports = {
    entry: './index.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js' 
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'] 
          }
        }
      ]
    }
  };