import axios from 'axios'

export default {
  navBar: url => {
    return new Promise((resolve, reject) => {
      axios({
        url
      }).then(res => {
        if (res.data.code === 1) {
          resolve(res.data)
        } else {
          reject('asd')
        }
      })
    })
  },
  cate: url => {
    return new Promise((resolve, reject) => {
      axios({
        url
      }).then(res => {
        resolve(res.data)
      })
    })
  },
  get: url => {
    return new Promise((resolve, reject) => {
      axios({
        url,
        headers: {
          referer: 'https://m.taoshouyou.com',
          host: 'https://m.taoshouyou.com'
        }
      }).then(res => {
        resolve(res.data)
      })
    })
  },
  getGoods: option => {
    return new Promise((resolve, reject) => {
      axios({
        url: option.url
      }).then(res => {
        resolve(res.data)
      })
    })
  }
}
