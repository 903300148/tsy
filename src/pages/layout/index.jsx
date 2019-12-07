import React, { Component } from 'react'
import Main from './Main'
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Home',
      hidden: false,
      }
  }

  render() {
    return (
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selected={this.state.selectedTab === 'Home'}
          onPress={() => {
              this.props.history.push('/')
              this.setState({
                selectedTab: 'Home'
              })
            }}
          >
            <Main></Main>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            title="我要买"
            key="Buy"
            selected={this.state.selectedTab === 'Buy'}
          onPress={() => {
            this.props.history.push('/games/buy')
              this.setState({
                selectedTab: 'Buy'
              })
            }}
          >
            2
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            title="我要卖"
            key="Sell"
            selected={this.state.selectedTab === 'Sell'}
            onPress={() => {
              this.setState({
                selectedTab: 'Sell'
              })
            }}
          >
            3
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
            }}
            selectedIcon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
            }}
            title="消息"
            key="Message"
            selected={this.state.selectedTab === 'Message'}
            onPress={() => {
              this.setState({
                selectedTab: 'Message'
              })
            }}
          >
            4
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
            }}
            selectedIcon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
            }}
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My'
              })
            }}
          >
            5
          </TabBar.Item>
        </TabBar>
    )
  }
}

export default withRouter(App)
