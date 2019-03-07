import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Commodities from './pages/Commodities'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route path={`/about`} component={About} />
          <Route path={`/register`} component={Register} />
          <Route path={`/login`} component={Login} />
          <Route path={`/commodities`} component={Commodities} />
        </Switch>
      </Router>
    )
  }
}

export default App
