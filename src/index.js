import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './pages/layout/'
import './assets/styles/reset.less'
import './assets/styles/index.less'
import 'lib-flexible'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById('root')
)
