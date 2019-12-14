import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
// import BScroll from 'better-scroll'
import '@/styles/icon.less'
import './buy.less'
import axios from '../../../axios/index'
import { withRouter } from 'react-router-dom'
import store from 'store'
export class Buy extends Component {
  state = {
    selectLetter: 'Hot',
    contentList: [],
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
  async componentDidMount() {
    let result = await axios.cate(`/api/cate/${this.state.selectLetter}`)
    result.list.map(item => {
      item.pic = 'https://img2.taoshouyou.com' + item.pic
      return null
    })
    this.setState({
      contentList: result.list
    })

    // Axios({
    //   url: '/d',
    //   method: 'post'
    // }).then(res => {
    //   console.log(res)
    // })
  }
  handelRoute = data => {
    console.log(data.gameid)

    let info = {
      title: data.title,
      parentgoodsid: 20,
      goodsid: 1,
      gameid: data.gameid
    }
    store.set('goods', info)
    // koudaiyaoguaifuke-442-20-1
    this.props.history.push({
      pathname: '/games/buy/list/shenwu-2256-20-1',
      params: info
    })
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
                        this.handelRoute({ title: item.name, gameid: item.id })
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
      </div>
    )
  }
}

// new BScroll('.main-index', {
//   // mouseWheel: true,
//   preventDefault: false
// })
// new BScroll('.main-content', {
//   // mouseWheel: true,
//   preventDefault: false
// })
export default withRouter(Buy)
