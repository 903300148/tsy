import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './home/Home'
import Buy from './buy/Buy'
import Sell from './sell/Sell'
import Message from './message/Message'
import My from './my/My'
import GoodsList from './buy/GoodsList'
export class Main extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/games/buy" component={Buy}></Route>
        <Route
          exact={true}
          path="/games/buy/list/:msg"
          render={r => {
            return (
              <GoodsList
                titel={r.location.params && '游戏列表'}
              ></GoodsList>
            )
          }}
        ></Route>

        <Route exact={true} path="/games/sell" component={Sell}></Route>
        <Route exact={true} path="/games/message" component={Message}></Route>
        <Route exact={true} path="/games/my" component={My}></Route>
      </div>
    )
  }
}

export default Main
