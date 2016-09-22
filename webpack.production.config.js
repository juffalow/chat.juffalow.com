var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/main.js',
  output: { path: __dirname, filename: './js/chatapp.js' },
  module: {
    loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-class-properties'],
                presets: ['es2015', 'react']
            }
        }
    ]
  },
    plugins: [
      new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      })
    ],
};
