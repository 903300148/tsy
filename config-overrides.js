const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
  addWebpackPlugin,
  addWebpackAlias
} = require('customize-cra')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const px2rem = require('postcss-px2rem')
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  addPostcssPlugins([px2rem({ remUnit: 37.5 })]),
  addWebpackPlugin(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 9000,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src/assets')
  })
)
