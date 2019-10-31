const path = require('path');
const srcPath = path.resolve(__dirname, './src');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const excludePath = /node_modules/;

module.exports = function() {
  return {
    context: srcPath,
    module: {
      rules: [
        {
          test: /\.pug$/,
          include: [srcPath],
          use: [{ loader: 'pug-plain-loader' }],
        },
        {
          test: /\.js$/,
          include: [srcPath],
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.vue$/,
          include: [srcPath],
          use: [
            {
              loader: 'vue-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          exclude: excludePath,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'img/[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(otf|ttf|woff|woff2)$/,
          exclude: excludePath,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'fonts/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [excludePath.source, srcPath],
      extensions: ['.js', '.vue'],
      // alias: {
      // vue$: 'vue/dist/vue.esm.js',
      // },
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'Vue Project',
        inject: true,
        filename: 'index.html',
        template: 'index.html',
        lang: 'zh-Hant',
        minify: {
          collapseWhitespace: true,
          minifyJS: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
        chunksSortMode: 'none',
      }),
    ],
  };
};
