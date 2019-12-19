const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use([
    proxy('/api', {
      target: 'http://localhost:53000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
    proxy('/d', {
      target: 'https://m.taoshouyou.com/trades/list/indexpager',
      changeOrigin: true,
      pathRewrite: {
        '^/d': ''
      }
    }),
    proxy('/games', {
      target: 'https://m.taoshouyou.com/games/list/gameandgoods',
      changeOrigin: true,
      pathRewrite: {
        '^/games': ''
      }
    })
  ])
}
