const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins
} = require('customize-cra')
const px2rem = require('postcss-px2rem')
const pxtorem = require('postcss-pxtorem')
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
  addPostcssPlugins([px2rem({ remUnit: 37.5 })])
)
