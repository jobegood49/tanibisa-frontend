import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux' // a function, so it's camelCase
import { Provider } from 'react-redux' // a component, so it's TitleCase

import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Commodities from './pages/Commodities'

// REDUX INITIAL STATE

const initialState = {
  // these commodities will be retrieved from the backend /commodities
  commodities: [
    {
      id: 1,
      title: 'Red Apple',
      description: 'The description of the red apple',
      image: 'image of the red apple',
    },
    {
      id: 2,
      title: 'Green Mongo',
      description: 'Description of the green mongo',
      image: 'image of the green mongo',
    },
    {
      id: 3,
      title: 'Yellow Banana',
      description: 'Description of the yellow banana',
      image: 'image of the yellow banana',
    },
  ],
}

// REDUX REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMODITIES':
      return {
        commodities: state.commodities,
      }
    default:
      return state
  }
}

// REDUX CREATE STORE

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route path={`/about`} component={About} />
            <Route path={`/register`} component={Register} />
            <Route path={`/login`} component={Login} />
            <Route path={`/commodities`} component={Commodities} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
