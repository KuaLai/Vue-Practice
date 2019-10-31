const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.config.base');
const excludePath = /node_modules/;

const devConf = webpackMerge(baseConf(), {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 8788,
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './index',
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: excludePath,
        use: [
          {
            loader: 'vue-style-loader',
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // prependData: "@import '~sass/helpers.scss';",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});

module.exports = devConf;
