import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './pages/layout/'
import './assets/styles/reset.less'
import './assets/styles/index.less'
import 'lib-flexible'
import GoodsList from './pages/layout/buy/GoodsList'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Layout />
    {/* <Route
      exact={true}
      path="/"
      render={r => {
        return <Layout />
      }}
    ></Route>
    <Route
      exact={true}
      path="/games/buy/:msg"
      render={r => {
        return <GoodsList titel={r.location.params && '游戏列表'}></GoodsList>
      }}
    ></Route> */}
  </Router>,
  document.getElementById('root')
)
