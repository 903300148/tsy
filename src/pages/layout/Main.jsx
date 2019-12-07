import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Buy from './Buy'
import Sell from './Sell'
import Message from './Message'
import My from './My'
export class Main extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/games/buy" component={Buy}></Route>
        <Route exact={true} path="/games/sell" component={Sell}></Route>
        <Route exact={true} path="/games/message" component={Message}></Route>
        <Route exact={true} path="/games/my" component={My}></Route>
      </div>
    )
  }
}

export default Main
