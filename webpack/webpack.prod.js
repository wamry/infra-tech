const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const DefinePlugin = require('webpack').DefinePlugin
const TerserPlugin = require('terser-webpack-plugin')
const EnvironmentPlugin = require('webpack').EnvironmentPlugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const paths = require('../config/paths')
const webpackCommon = require('./webpack.common.js')
const dotenv = require('dotenv')
const { merge } = require('webpack-merge')

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
const publicUrl = ''

module.exports = merge(webpackCommon, {
  mode: 'production',
  target: 'web',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            inline: 2,
          },
          keep_classnames: true,
          keep_fnames: true,
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin(
      Object.assign(
        {
          inject: true,
          template: paths.appHtml,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        },
      )
    ),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: publicUrl
    }),
    new EnvironmentPlugin( { ...process.env } ),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
  ],
})
