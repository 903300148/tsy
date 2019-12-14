import React, { Component } from 'react'
import Header from './Header'
import { Carousel, WingBlank, Grid } from 'antd-mobile'
import './home.less'
import { data, dataList, hotData, hotTradeData } from '../../../mock/home'
hotData.map((item, index) => {
  return (item.pic = 'https://img2.taoshouyou.com' + item.pic)
})

export class Home extends Component {
  state = {
    data: data,
    imgHeight: 182
  }
  render() {
    return (
      <div id="home">
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
        </div>
        <div className="welfare">
          <div className="item-title">专属福利</div>
          <div className="tsy-ggw1">
            <div className="tsy-ggw1-img">
              <a href="/">
                <img
                  src="https://img2.taoshouyou.com/img/2019-11-27/13/bc7fe7ecd38ad7f58d2481c4f8142d80.jpg"
                  alt=""
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
        <div className="hotGames">
          <div className="item-title">热门游戏</div>
          <div className="games-content">
            <Grid
              data={hotData.filter((item, index) => {
                if (index >= 12) {
                  return false
                }
                return item
              })}
              activeStyle={false}
              columnNum={4}
              hasLine={false}
              renderItem={dataItem => (
                <div className="hotgames_box">
                  <img className="hotgames_img" src={dataItem.pic} alt="" />
                  <div style={{ color: '#888', fontSize: '14px' }}>
                    <span className="hotgames_text">{dataItem.name}</span>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="trade_jump">
            <a href="/games/buy">查看更多游戏&gt;</a>
          </div>
        </div>
        <a className="advert" href="/">
          <img
            src="https://m.taoshouyou.com/static/home/static/img/index/abs_5e01330.jpg"
            alt=""
          />
        </a>

        <div className="hotGoods">
          <div className="hotTrade module hotlist">
            <div className="item-title">热门商品</div>
            <div className="hot-content">
              <ul>
                {hotTradeData.map(item => {
                  return (
                    <li key={item.id}>
                      <a href="/taoid_20495753.html" className="contents">
                        <div className="hot-contents-left">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="hot-contents-center">
                          <div className="title">
                            <span>{item.des}</span>
                          </div>
                        </div>
                        <span
                          className="red price hot-contents-right"
                          style={{
                            fontSize: 14,
                            width: 70,
                            textAlign: 'right'
                          }}
                        >
                          {item.symbol}
                          {item.price}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="trade_jump trader-more ">
            <a href="/game">查看全部游戏&gt;</a>
          </div>
        </div>
     
        <div className="module contact-way" style={{ paddingTop: 0, marginBottom: 0 }}>
    <div className="contact-content">
      <div className="contact-way-title item-title ">客服热线</div>
      <ul className="safety-tips">
        <li>
          <div>
            <p>账号1</p>
            <p>0859-3111537</p>
          </div>
        </li>
        <li>
          <div>
            <p>账号2</p>
            <p>0859-3111583</p>
          </div>
        </li>
        <li>
          <div style={{ borderRight: '1px solid #fff' }}>
            <p>首充咨询专线</p>
            <p>0859-3112025</p>
          </div>
        </li>
        <li>
          <div>
            <p>账号3</p>
            <p>0859-3111150</p>
          </div>
        </li>
        <li>
          <div>
            <p>账号4</p>
            <p>0859-3111782</p>
          </div>
        </li>
        <li>
          <div>
            <p></p>
            <p></p>
          </div>
        </li>
        <li style={{ width: '100%', border: 0 }}>
          <p>
            注：客服热线只能接听,无外拨功能,如接到以上电话号码来电均为诈骗。
          </p>
        </li>
      </ul>
      <div className="clear"></div>
    </div>
  </div>
      </div>
    )
  }
}

export default Home
