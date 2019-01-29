const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');

module.exports = {
  entry: paths.appIndexJs,
  output: {
    filename: 'server.js',
    path: paths.appDist,
  },
  mode: 'development',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        options: {
          quiet: true,
          failOnError: true,
        },
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
