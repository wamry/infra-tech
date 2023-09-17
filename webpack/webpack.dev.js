const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')
const paths = require('../config/paths')

const host = process.env.HOST || 'localhost';

module.exports = merge(webpackCommon, {
  mode: 'development',
  bail: true, // https://webpack.js.org/configuration/other-options/#bail
  devServer: {
    host,
    port: 3000,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: '/',
    }),
  ],
})
