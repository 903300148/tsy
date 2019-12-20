import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route exact path="/games/buy" component={Buy}></Route>
          <Route
            exact
            path="/games/buy/:msg"
            render={r => {
              return (
                <GoodsList titel={r.location.params && '游戏列表'}></GoodsList>
              )
            }}
          ></Route>
          <Route exact path="/games/sell" component={Sell}></Route>
          <Route exact path="/games/message" component={Message}></Route>
          <Route exact path="/games/my" component={My}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    )
  }
}

export default Main
