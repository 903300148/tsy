import React, { Component } from 'react'
import Header from './components/Header'

import { Carousel, WingBlank, Grid } from 'antd-mobile'
import './styles/home.less'

const dataList = [
  {
    id: 1,
    key: 1,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/31/a9e606b74b8e083a3d3ce0ffa85293ec.jpg',
    text: '账号'
  },
  {
    id: 2,
    key: 2,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/4/df1f969e61928787cba1669cebbd4c52.jpg',
    text: '首充号'
  },
  {
    id: 3,
    key: 3,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/29/bd574b9399717ae3427dbdd5229e908c.jpg',
    text: '首充号续充'
  },
  {
    id: 4,
    key: 4,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/30/6e078119caf4317d53ee48af4ec3cfbe.jpg',
    text: '苹果代充'
  },
  {
    id: 5,
    key: 5,
    icon:
      'https://img2.taoshouyou.com/img/2018-10-26/17/520899b3da5f9ba8309651ed81083ad7.jpg',
    text: '租号'
  },
  {
    id: 6,
    key: 6,
    icon:
      'https://img2.taoshouyou.com/img/2018-10-26/19/6d91376d8437eb8c20b7fdd7dfae1d29.jpg',
    text: '开局号'
  },
  {
    id: 7,
    key: 7,
    icon:
      'https://img2.taoshouyou.com/img/2019-05-30/6/584ddc5776a2ffcecde84a51e43fd518.png',
    text: '满V游戏'
  },
  {
    id: 8,
    key: 8,
    icon:
      'https://img2.taoshouyou.com/img/2018-12-29/26/50bfd0aca854a73bc8fcfed42691f79e.jpg',
    text: '端游'
  },
  {
    id: 9,
    key: 9,
    icon:
      'https://img2.taoshouyou.com/img/2018-10-26/14/356285d6ddd04e0fceb807e653ac1621.jpg',
    text: '云手机'
  },
  {
    id: 10,
    key: 10,
    icon:
      'https://img2.taoshouyou.com/img/2019-10-26/27/4977d6fcedf5b0b60993ec5f283c6bb0.png',
    text: '折扣充值'
  }
]

export class Home extends Component {
  state = {
    data: [
      'https://img2.taoshouyou.com/img/2019-08-12/2/bd222268296aa7619ef109f374010a8c.jpg',
      'https://img2.taoshouyou.com/img/2019-09-12/7/1cbd7a517f12ada42ea09e4613e92375.jpg',
      'https://img2.taoshouyou.com/img/2019-11-26/7/4c3aa298caf94d9369270915df0ff4f6.jpg',
      'https://img2.taoshouyou.com/img/2019-11-06/24/7baaf4b86549e64c2a4c29b03e87c451.png',
      'https://img2.taoshouyou.com/img/2019-11-13/17/5aaef6416e58e6a41f6f5b3237b3fb9b.jpg'
    ],
    imgHeight: 182
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="banner">
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              dotActiveStyle={{
                width: 25,
                height: 5,
                borderRadius: 5,
                background: '#fff'
              }}
              dotStyle={{
                height: 5,
                width: 5,
                background: '#fff'
              }}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="/"
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    height: this.state.imgHeight
                  }}
                >
                  <img className="banner-img" src={val} alt="" />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        <div className="business">
          <Grid
            data={dataList}
            activeStyle={false}
            columnNum={5}
            hasLine={false}
            renderItem={dataItem => (
              <div>
                <img className="business-img" src={dataItem.icon} alt="" />
                <div style={{ color: '#888', fontSize: '14px' }}>
                  <span className="business-text">{dataItem.text}</span>
                </div>
              </div>
            )}
          />
          <div className="item-title">专属福利</div>
          <div className="tsy-ggw1">
            <div className="tsy-ggw1-img">
              <a href="/">
                <img
                  src="https://img2.taoshouyou.com/img/2019-11-27/13/bc7fe7ecd38ad7f58d2481c4f8142d80.jpg"
                  alt={1}
                />
              </a>
            </div>
            <div className="tsy-ggw1-img">
              <a href="/">
                <img
                  src="https://img2.taoshouyou.com/img/2019-12-03/10/2a5ab8cefc3757332afa44981983dcbe.png"
                  alt=""
                />
              </a>
            </div>
            <div className="tsy-ggw1-img">
              <a href="/">
                <img
                  src="https://img2.taoshouyou.com/img/2019-11-23/14/690f0ea943f14f0afbedf6b087b6b890.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="tsy-ggw1-img">
              <a href="/">
                <img
                  src="https://img2.taoshouyou.com/img/2019-10-28/0/6776d2a9ba4cee82d3e26806597100c2.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div
            className="sdkad-box  down-statistics"
            style={{ margin: '0.1rem 0' }}
          >
            <a href="/">
              <img
                src="https://m.taoshouyou.com/static/home/static/img/goodslist/download1_4a77658.gif"
                id="js-sdkad-img"
                alt=""
              />
            </a>
          </div>
          <div className="clearfix"></div>
          <div className="item-title">热门游戏</div>
        </div>
      </div>
    )
  }
}

export default Home
