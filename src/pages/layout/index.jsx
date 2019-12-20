import React, { Component } from 'react'
import Main from './Main'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import axios from '../../axios/index'

import './index.less'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Home',
      hidden: false,
      navBarData: []
    }
  }
  async componentDidMount() {
    let result = await axios.navBar('/api/tabData')
    this.setState({
      navBarData: result.data
    })
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f3f3f3"
        hidden={this.state.hidden}
        tabBarPosition="bottom"
      >
        {this.state.navBarData.map((item, index) => {
          return (
            <TabBar.Item
              key={item.key}
              icon={
                index !== 2 ? (
                  <div
                    style={{
                      width: '75px',
                      height: '36px',
                      backgroundSize: 'contain',
                      background: `url(${item.src}) center center /  30px 30px no-repeat`
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '75px',
                      height: '64px'
                    }}
                  >
                    <img
                      src={item.src}
                      style={{
                        width: '50px',
                        height: '64px',
                        position: 'relative',
                        bottom: '8px'
                      }}
                      alt=""
                    />
                  </div>
                )
              }
              selectedIcon={
                index !== 2 ? (
                  <div
                    style={{
                      width: '75px',
                      height: '36px',
                      background: `url(${item.activeSrc}) center center /  30px 30px no-repeat`
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '75px',
                      height: '64px'
                    }}
                  >
                    <img
                      src={item.activeSrc}
                      style={{
                        width: '50px',
                        height: '64px',
                        position: 'relative',
                        bottom: '8px'
                      }}
                      alt=""
                    />
                  </div>
                )
              }
              selected={this.state.selectedTab === item.name}
              onPress={() => {
                this.props.history.push(item.route)
                this.setState({
                  selectedTab: item.name
                })
              }}
            >
              <Main></Main>
            </TabBar.Item>
          )
        })}
      </TabBar>
    )
  }
}
export default withRouter(App)
