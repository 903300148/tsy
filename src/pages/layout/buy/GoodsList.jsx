import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import store from 'store'
import axios from '../../../axios/index'
import './goodList.less'
import _ from 'lodash'
import { logicalExpression } from '@babel/types'
import { async } from 'q'

class GoodsList extends Component {
  state = {
    title: store.get('goods') ? store.get('goods').title : '游戏列表',
    goodList: [],
    isLoading: true,
    isShow: false,
    conditionActive: [
      { id: '20', childId: '1', text: '账号' },
      { id: '202', childId: '1', text: '服务器' },
      { id: '301', childId: '1', text: '排序' },
      { id: '401', childId: '1', text: '筛选' }
    ],
    currentActive: '20',
    preId: '',
    conditionList: [
      {
        id: '20',
        text: '账号',
        icon: 'icon-caret-bottom',
        children: [
          {
            id: '1',
            text: '账号',
            goodsid: '1',
            parentid: '20'
          },
          {
            id: '2',
            text: '开局号/金币号',
            goodsid: '24',
            parentid: '20'
          },
          {
            id: '3',
            text: '转移号',
            goodsid: '21',
            parentid: '20'
          },
          {
            id: '4',
            text: '人气头像框',
            goodsid: '23',
            parentid: '20'
          },
          {
            id: '5',
            text: '贵族号',
            goodsid: '22',
            parentid: '20'
          }
        ]
      },
      {
        id: '202',
        text: '服务器',
        icon: 'icon-caret-bottom',
        children: [
          {
            id: '1',
            text: '全部客户端',
            goodsid: '1',
            parentid: '202'
          },
          {
            id: '2',
            text: '安卓微信',
            goodsid: '1',
            parentid: '202'
          },
          {
            id: '3',
            text: '安卓QQ',
            goodsid: '1',
            parentid: '202'
          },
          {
            id: '4',
            text: '苹果微信',
            goodsid: '1',
            parentid: '202'
          },
          {
            id: '5',
            text: '苹果QQ',
            goodsid: '1',
            parentid: '202'
          }
        ]
      },
      {
        id: '301',
        text: '排序',
        icon: 'icon-caret-bottom',
        children: [
          {
            id: '1',
            text: '默认排序',
            goodsid: '1',
            parentid: '301'
          },
          {
            id: '2',
            text: '价格从高到低',
            goodsid: '1',
            parentid: '301'
          },
          {
            id: '3',
            text: '价格从低到高',
            goodsid: '1',
            parentid: '301'
          },
          {
            id: '4',
            text: '发布时间倒序',
            goodsid: '1',
            parentid: '301'
          },
          {
            id: '5',
            text: '发布时间正序',
            goodsid: '1',
            parentid: '301'
          }
        ]
      },
      {
        id: '401',
        text: '筛选',
        icon: 'icon-filter',
        children: [
          {
            id: '1',
            text: '默认筛选',
            goodsid: '1',
            parentid: '401'
          },
          {
            id: '2',
            text: '价格从高到低',
            goodsid: '1',
            parentid: '401'
          },
          {
            id: '3',
            text: '价格从低到高',
            goodsid: '1',
            parentid: '401'
          },
          {
            id: '4',
            text: '发布时间倒序',
            goodsid: '1',
            parentid: '401'
          },
          {
            id: '5',
            text: '发布时间正序',
            goodsid: '1',
            parentid: '401'
          }
        ]
      }
    ]
  }

  handelBack = () => {
    this.props.history.go(-1)
  }
  componentWillMount() {}
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
  switchFilter = options => {
    let { id, childId } = options
    if (this.state.preId === id) {
      this.setState({
        isShow: !this.state.isShow,
        currentActive: id
      })
    } else {
      this.setState({
        preId: id,
        isShow: true,
        currentActive: id
      })
    }
  }
  resultFilter = async option => {
    let { id, goodsid, parentid, text } = option
    let resultChildren = _.find(this.state.conditionActive, { id: parentid })
    let filterChildren = _.find(this.state.conditionList, { id: parentid })
    resultChildren.childId = id
    filterChildren.text = text
    let gameid = store.get('goods') ? store.get('goods').gameid : ''
    let res = await axios.getGoods({
      url: '/d',
      data: {
        gameid,
        parentgoodsid: parentid,
        goodsid: <goodsid></goodsid>
      }
    })
    this.setState({
      isShow: false,
      goodList: res.goodsList.filter(item => {
        item.picurl = item.picurl
          ? item.picurl[0]
          : 'https://m.taoshouyou.com/static/home/static/img/goodslist/noimg_bb2fc02.png'
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
        <div className="goods-filter">
          <div className="goods-filter-condition">
            {this.state.conditionList.map(item => {
              let mapCondition = _.find(this.state.conditionActive, {
                id: item.id
              })
              return (
                <div
                  key={item.id}
                  onClick={() =>
                    this.switchFilter({
                      id: item.id,
                      childId: mapCondition.childId
                    })
                  }
                  className={this.state.id === item.id ? 'active' : ''}
                >
                  <span ref={`ref${item.id}`}>{item.text}</span>
                  <i className={'iconfont ' + item.icon}></i>
                </div>
              )
            })}
          </div>
          <div
            className={`goods-filter-result ${
              this.state.isShow ? 'goods-show' : 'goods-hidden'
            }`}
          >
            {_.find(this.state.conditionList, {
              id: this.state.currentActive
            }).children.map(item => {
              let mapResult = _.find(this.state.conditionActive, {
                id: item.parentid
              })
              return (
                <p
                  key={item.id}
                  className={`p-goodslist-filter-type-p ${
                    mapResult.childId === item.id ? 'active' : ''
                  }`}
                  onClick={() =>
                    this.resultFilter({
                      goodsid: item.goodsid,
                      parentid: item.parentid,
                      id: item.id,
                      text: item.text
                    })
                  }
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
