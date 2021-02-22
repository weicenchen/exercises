const path = require('path');
// const paths = require('paths');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line no-var
// var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  output: {
    filename: './bundle.js',
    publicPath: '/',

  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: path.resolve('./.eslintrc.js'),
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: path.resolve('./src/image/citrus.ico'),
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './mockServiceWorker.js', to: './mockServiceWorker.js' },
      ],
    }),
    new webpack.EnvironmentPlugin({
      WEB_ROOT_NAME: '/',
      // PROTOCOL: 'http://',
      // SERVER_IP: 'imseng.ami.com.tw',
      // SERVER_PORT: '8080',
      // APP_VERSION: `${packageJson.version}`,
      // ENABLE_SSE: packageJson.enableSse,
      // UI_VERSION: 'internal', // 'internal', 'external'
      // TEST_MODE: false,
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, './mockServiceWorker.js'),
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
