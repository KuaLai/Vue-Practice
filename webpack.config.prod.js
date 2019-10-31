const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const excludePath = /node_modules/;

process.env.NODE_ENV = 'production';
const prodConf = webpackMerge(baseConf(), {
  mode: 'production',
  entry: {
    main: './index',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: excludePath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
      }),
    ],
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        default: false,

        async: {
          minChunks: 2,
          name: 'async',
          chunks: 'async',
          priority: -2,
          enforce: true,
        },

        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    publicPath: '/',
    filename: 'js/[name].bundle.[chunkhash:8].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:8].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),

    new webpack.HashedModuleIdsPlugin(),
    new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin(),
  ],
});

module.exports = prodConf;
