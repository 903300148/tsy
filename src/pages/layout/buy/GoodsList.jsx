import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import store from 'store'
import axios from '../../../axios/index'
import './goodList.less'
import _ from 'lodash'

class GoodsList extends Component {
  state = {
    title: store.get('goods') ? store.get('goods').title : '游戏',
    goodList: [],
    isLoading: true,
    isShow: false,
    conditionActive: ['101'],
    resultActive: ['1001'],
    preId: '',
    conditionList: [
      {
        id: '101',
        text: '账号',
        icon: 'icon-caret-bottom',
        children: [
          {
            id: '1001',
            text: '账号',
            'data-goodsid': 1,
            'data-parentid': 20
          },
          {
            id: '1002',
            text: '开局号/金币号',
            'data-goodsid': 24,
            'data-parentid': 20
          },
          {
            id: '1003',
            text: '转移号',
            'data-goodsid': 21,
            'data-parentid': 20
          },
          {
            id: '1004',
            text: '人气头像框',
            'data-goodsid': 23,
            'data-parentid': 20
          },
          {
            id: '1005',
            text: '贵族号',
            'data-goodsid': 22,
            'data-parentid': 20
          },
          {
            id: '1006',
            text: '材料',
            'data-goodsid': 15,
            'data-parentid': 14
          }
        ]
      },
      {
        id: '202',
        text: '服务器',
        icon: 'icon-caret-bottom',
        children: [
          {
            id: '2001',
            text: '全部客户端'
          },
          {
            id: '2002',
            text: '安卓微信'
          },
          {
            id: '2003',
            text: '安卓QQ'
          },
          {
            id: '2004',
            text: '苹果微信'
          },
          {
            id: '2005',
            text: '苹果QQ'
          }
        ]
      },
      {
        id: '301',
        text: '排序',
        icon: 'icon-caret-bottom',
        children: [
          {
            id: '3001',
            text: '默认排序'
          },
          {
            id: '3002',
            text: '价格从高到低'
          },
          {
            id: '3003',
            text: '价格从低到高'
          },
          {
            id: '3004',
            text: '发布时间倒序'
          },
          {
            id: '3005',
            text: '发布时间正序'
          }
        ]
      },
      {
        id: '401',
        text: '筛选',
        icon: 'icon-filter',
        children: [
          {
            id: '4001',
            text: '默认排序'
          },
          {
            id: '4002',
            text: '价格从高到低'
          },
          {
            id: '4003',
            text: '价格从低到高'
          },
          {
            id: '4004',
            text: '发布时间倒序'
          },
          {
            id: '4005',
            text: '发布时间正序'
          }
        ]
      }
    ]
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
        item.picurl = item.picurl
          ? item.picurl[0]
          : 'https://m.taoshouyou.com/static/home/static/img/goodslist/noimg_bb2fc02.png'
        return item.id !== '7'
      })
    })
  }
  switchFilter = e => {
    let id = e.currentTarget.getAttribute('data-id')
    let childId = _.find(this.state.conditionList, { id }).children[0].id
    if (this.state.preId === id) {
      this.setState({
        conditionActive: [id],
        resultActive: [childId],
        isShow: !this.state.isShow
      })
    } else {
      this.setState({
        conditionActive: [id],
        resultActive: [childId],
        isShow: true,
        preId: id
      })
    }
  }
  resultFilter = e => {
    let id = e.currentTarget.getAttribute('data-id')
    console.log(1)
      this.setState({
      resultActive: [id]
    })
  }
  render () {
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
        <div className="goods-filter">
          <div className="goods-filter-condition">
            {this.state.conditionList.map(item => {
              return (
                <div
                  key={item.id}
                  onClick={this.switchFilter}
                  data-id={item.id}
                  className={
                    this.state.conditionActive[0] === item.id ? 'active' : ''
                  }
                  data-goodsid="1"
                  data-parentid="20"
                >
                  <span>{item.text}</span>
                  <i className={'iconfont ' + item.icon}></i>
                </div>
              )
            })}
          </div>
          <div
            className={`goods-filter-result ${
              this.state.isShow ? 'goodss-show' : 'goods-hidden'
            }`}
          >
            {_.find(this.state.conditionList, {
              id: this.state.conditionActive[0]
            }).children.map(item => {
              return (
                <p
                  key={item.id}
                  onClick={this.resultFilter}
                  className={`p-goodslist-filter-type-p ${
                    this.state.resultActive[0] === item.id ? 'active' : ''
                  }`}
                  data-goodsid="24"
                  data-parentid="20"
                  data-id={item.id}
                >
                  {item.text}
                </p>
              )
            })}
          </div>
        </div>
        <div id="thelist">
          <div id="more">
            {this.state.goodList.map(item => {
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
