const categoryData = require('./category/data.json')
const searchData = require('./category/search.json')
const tabData = {
  code: 1,
  data: [
    {
      id: 1,
      key: '1',
      src: 'http://localhost:53000/images/home.png',
      activeSrc: 'http://localhost:53000/images/home_active.png',
      route: '/',
      name: '首页'
    },
    {
      id: 2,
      key: '2',
      src: 'http://localhost:53000/images/buy.png',
      activeSrc: 'http://localhost:53000/images/buy_active.png',
      route: '/games/buy',
      name: '我要买'
    },
    {
      id: 3,
      key: '3',
      src: 'http://localhost:53000/images/sell.png',
      activeSrc: 'http://localhost:53000/images/sell_active.png',
      route: '/games/sell',
      name: '我要卖'
    },
    {
      id: 4,
      key: '4',
      src: 'http://localhost:53000/images/message.png',
      activeSrc: 'http://localhost:53000/images/message_active.png',
      route: '/games/message',
      name: '消息'
    },
    {
      id: 5,
      key: '5',
      src: 'http://localhost:53000/images/my.png',
      activeSrc: 'http://localhost:53000/images/my_active.png',
      route: '/games/my',
      name: '我的'
    }
  ]
}

module.exports = () => {
  return {
    tabData,
    cate: categoryData,
    search: searchData
  }
}
