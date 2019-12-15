import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { ListView } from 'antd-mobile'
import store from 'store'
import axios from '../../../axios/index'
import './goodList.less'

class GoodsList extends Component {
  state = {
    title: store.get('goods') ? store.get('goods').title : '游戏',
    goodList: [],
    isLoading: true
  }
  handelBack = () => {
    this.props.history.go(-1)
  }
  async componentDidMount() {
    let { gameid, parentgoodsid, goodsid } = store.get('goods')
    let res = await axios.getGoods({
      url: '/d',
      data: {
        gameid,
        parentgoodsid,
        goodsid
      }
    })
    this.setState({
      goodList: res.goodsList.filter(item => {
        return item.id !== '7'
      })
    })
  }

  render() {
    return (
      <div id="goodsList">
        <NavBar
          mode="dark"
          leftContent={
            <i className="iconfont  icon-back" style={{ fontSize: '20px' }}></i>
          }
          rightContent={
            <i className="iconfont  icon-home" style={{ fontSize: '20px' }}></i>
          }
          onLeftClick={this.handelBack}
        >
          {this.state.title}
        </NavBar>
        <div style={{ height: '41px', background: 'green' }}>11</div>
        <div style={{ height: '40px', background: 'gray' }}>11</div>
        <div id="thelist">
          <div id="more">
            {this.state.goodList.map(item => {
              console.log(item)

              item.picurl = item.picurl
                ? item.picurl[0]
                : 'https://m.taoshouyou.com/static/home/static/img/goodslist/noimg_bb2fc02.png'

              return (
                <div className="more-list" key={item.id}>
                  <a href="">
                    <div className="list-img">
                      <img src={item.picurl} alt="" />
                    </div>
                    <div className="list-info">
                      <div className="goodsName">{item.name}</div>
                      <div className="clienBox">
                        <div className="goodsclien">
                          <span>{item.clientname}</span>
                          <span>{item.areaname}</span>
                        </div>
                        <div className="sellmode">
                          {item.sellmode !== '2' ? (
                            <span className="jishoubox">寄售</span>
                          ) : (
                            ''
                          )}
                          <span className="toubao">已投保</span>
                        </div>
                      </div>
                      <div className="goodsbrightened">{item.bright_spot}</div>
                      <div className="linebox">
                        <div className="islineBox">{item.lastSellerOnline}</div>
                        <div className="goodsprice">￥{item.price}</div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
          <div className="p-goodslist-nogames"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(GoodsList)
