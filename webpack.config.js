const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const PUBLIC_DIR = path.join(__dirname, '/client/public');
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&minetype=image/png'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      },
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};