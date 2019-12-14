import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import store from 'store'
import axios from '../../../axios/index'
class GoodsList extends Component {
  state = {
    title: store.get('goods').title || '游戏'
  }
  handelBack = () => {
    this.props.history.go(-1)
  }
  async componentDidMount () {
    console.log(this.props);
    // let { parentgoodsid, goodsid } = store.get('goods')
    // let res = await axios.getGoods({
    //   url: '/d'
    // })
    // console.log(res.goodsList);
    
  }
  render() {
    return (
      <div>
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
          {this.props.title || this.state.title}
        </NavBar>
      </div>
    )
  }
}

export default withRouter(GoodsList)
