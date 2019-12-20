import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import '@/styles/icon.less'
import './buy.less'
import axios from '../../../axios/index'
import { withRouter } from 'react-router-dom'
import store from 'store'
export class Buy extends Component {
  state = {
    selectLetter: 'Hot',
    maskShow: true,
    contentList: [],
    actyList: [],
    letterList: [
      'Hot',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'W',
      'X',
      'Y',
      'Z'
    ],
    searchKeyword: ''
  }
  handleInput = e => {
    this.setState({
      searchKeyword: e.target.value
    })
  }
  handleSearch = async () => {
    if (this.state.searchKeyword === '') {
      return false
    }
    let result = await axios.cate(`/api/search?q=${this.state.searchKeyword}`)
    if (result.length !== 0) {
      result.map(item => {
        return (item.pic = 'https://img2.taoshouyou.com' + item.pic)
      })
      this.setState({
        contentList: result
      })
      return false
    }
    this.setState({
      contentList: result
    })
  }
  handleSelect = async item => {
    let result = await axios.cate(`/api/cate/${item}`)
    result.list.map(item => {
      item.pic = 'https://img2.taoshouyou.com' + item.pic
      return null
    })
    this.setState({
      selectLetter: item,
      contentList: result.list
    })
  }
  handelRoute = async data => {
    let info = {
      title: data.title,
      parentgoodsid: 20,
      goodsid: 1,
      gameid: data.gameid,
      spelling: data.spelling
    }
    store.set('goods', info)
    let params = {
      gameid: data.gameid
    }
    let axiosActyList = await axios.getAcTypeList({
      url: '/tsy/games/list/gameandgoods',
      params
    })
    console.log(axiosActyList)

    // this.props.history.push({
    //   pathname: `/games/buy/${info.spelling}-${info.gameid}-${info.parentgoodsid}-${info.goodsid}`,
    //   params: info
    // })
    this.setState({
      maskShow: true,
      actyList: axiosActyList
    })
  }
  async componentDidMount() {
    let result = await axios.cate(`/api/cate/${this.state.selectLetter}`)
    result.list.map(item => {
      item.pic = 'https://img2.taoshouyou.com' + item.pic
      return null
    })
    this.setState({
      contentList: result.list
    })
  }

  closeMask = e => {
    this.setState({
      maskShow: false
    })
  }
  stop = e => {
    e.stopPropagation()
  }
  render() {
    return (
      <div id="buy">
        <NavBar
          mode="dark"
          leftContent={
            <i className="iconfont  icon-back" style={{ fontSize: '20px' }}></i>
          }
          rightContent={
            <i className="iconfont  icon-home" style={{ fontSize: '20px' }}></i>
          }
        >
          游戏列表
        </NavBar>
        <div id="search_keyword">
          <div id="input_txt">
            <i
              className="iconfont  icon-search"
              style={{
                fontSize: '14px',
                marginLeft: '5px',
                color: '#000',
                fontWeight: 600,
                position: 'absolute',
                top: '5px'
              }}
            ></i>
            <input
              type="text"
              id="txt_keyword"
              data-role="none"
              placeholder="请输入游戏名称"
              onChange={this.handleInput}
            />
          </div>
          <div id="btn_keyword_search" onClick={this.handleSearch}>
            搜索
          </div>
        </div>

        <div className="sdkad-box  down-statistics" style={{ margin: '5px 0' }}>
          <a href="/games/buy" id="js-sdkad-href">
            <img
              src="https://m.taoshouyou.com/static/home/static/img/goodslist/download_e0f39f2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="main">
          <div className="main-index">
            <div>
              {this.state.letterList.map((item, index) => {
                return (
                  <div
                    key={item + index}
                    title={item}
                    letter={item}
                    className="main_fristword_box "
                  >
                    <div
                      className={`main_fristword ${
                        this.state.selectLetter === item ? 'active' : ''
                      }`}
                      onClick={() => this.handleSelect(item)}
                    >
                      {item === 'Hot' ? '热门' : item}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="main-content">
            <div>
              {this.state.contentList.map(item => {
                return (
                  <div className="gamelist_box gamelist" key={item.id}>
                    <div
                      className="gamelist_imgs clearfix"
                      onClick={() =>
                        this.handelRoute({
                          title: item.name,
                          gameid: item.id,
                          spelling: item.spelling
                        })
                      }
                    >
                      <img src={item.pic} border="0" alt="" />
                      <p>{item.name}</p>
                      <i className="iconfont icon-arrow-right"></i>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div
          className={`mask ${this.state.maskShow ? 'show' : 'hidden'}`}
          onClick={this.closeMask}
        >
          <div className="mask-box" onClick={this.stop}>
            <div className="games-type">
              <img
                className="games-type-icon"
                src="https://img2.taoshouyou.com/img/2018-12-11/22/63cf05a81476f1382bd5fd4c3dd08101-pc-l.jpg"
              />
              <p className="games-type-p">请选择购买类别</p>
            </div>
            <ul className="comeshow clearfix">
              {/* {this.state.actyList.map(item => {
                return (
                  
                )
              })} */}
              <li className="show">
                <a>
                  <div className="type-pic nav1" style={{}}></div>
                  <p className="type-name">账号1</p>
                </a>
              </li>
              <li className="show">
                <a>
                  <div className="type-pic nav2" style={{}}></div>
                  <p className="type-name">账号2</p>
                </a>
              </li>
              <li className="hide">
                <a>
                  <div className="type-pic nav3" style={{}}></div>
                  <p className="type-name">账号3</p>
                </a>
              </li>
              <li className="show">
                <a>
                  <div className="type-pic nav4" style={{}}></div>
                  <p className="type-name">账号4</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Buy)
