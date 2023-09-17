const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const ProvidePlugin = require('webpack').ProvidePlugin
const dotenv = require('dotenv')
const paths = require('../config/paths');

module.exports = {
  entry: paths.appIndexJs,
  output: {
    path: paths.appBuild,
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[ext]',
    sourceMapFilename: '[name].[contenthash:8].map',
    publicPath: paths.publicUrlOrPath,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      '@api': paths.resolveAlias('api'),
      '@components': paths.resolveAlias('components'),
      '@hooks': paths.resolveAlias('hooks'),
      '@i18n': paths.resolveAlias('i18n'),
      '@pages': paths.resolveAlias('pages'),
      '@store': paths.resolveAlias('store'),
      '@utils': paths.resolveAlias('utils'),
    },
  },
  performance: false,
  stats: 'errors-warnings',
  plugins: [
    new ProvidePlugin({
      "React": "react",
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ],
}
