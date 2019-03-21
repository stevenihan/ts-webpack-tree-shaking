const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve('thread-loader'),
        options: {
          workers: 2
        }
      }, {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
          happyPackMode: true,
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }]
    }]
  },
  optimization: {
    minimizer: [
      new UglifyWebpackPlugin({
        uglifyOptions: {
          keep_fnames: true,
          warnings: true
        }
      })
    ],
    sideEffects: false
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    symlinks: false
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntaticErrors: true,
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      tslint: path.resolve(__dirname, './tslint.json')
    }),
  ]
};
