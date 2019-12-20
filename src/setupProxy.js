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
    proxy('/tsy', {
      target: 'https://m.taoshouyou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/tsy': ''
      }
    })
    // ,
    // proxy('/games', {
    //   target: 'https://m.taoshouyou.com/games/list/gameandgoods',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/games': ''
    //   }
    // })
  ])
}
