## 使用技术

脚手架
create-react-app

状态管理
react-redux

路由
react-router

ajax 请求
axios

antd-mobile 组件库
antd-mobile

配置 webpack
react-app-rewired
customize-cra

按需加载组件插件
babel-plugin-import

flexible+postcss-px2rem 布局方案
postcss-px2rem
lib-flexible

styled-components
styled-components

less 预处理器
less
less-loader

跨域
 http-proxy-middleware

模块文件大小分析
 webpack-bundle-analyzer

json-server mockjs
模拟数据


react-app-polyfill
兼容ie

- 修改 package.json

  ```json
  "scripts": {

  "start": "react-app-rewired start",

  "build": "react-app-rewired build",

  "test": "react-app-rewired test --env=jsdom",
  }
  ```

* 配置 customize-cra

  跟 package.json 文件同级目录下创建 config-overrides.js 文件

  ```javascript
  const { override, fixBabelImports } = require('customize-cra')
  module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css' //`style: true` 会加载 less 文件
    })
  )
  ```

json-server  -c json-server.json index.js
git 操作
