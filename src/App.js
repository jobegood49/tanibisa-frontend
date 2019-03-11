import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux' // a component, so it's TitleCase

import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Commodities from './pages/Commodities'

// REDUX INITIAL STATE

// const initialState = {
//   // these commodities will be retrieved from the backend /commodities
//   commodities: [
//     {
//       id: 1,
//       title: 'Red Apple',
//       description: 'The description of the red apple',
//       image: 'image of the red apple',
//     },
//     {
//       id: 2,
//       title: 'Green Mongo',
//       description: 'Description of the green mongo',
//       image: 'image of the green mongo',
//     },
//     {
//       id: 3,
//       title: 'Yellow Banana',
//       description: 'Description of the yellow banana',
//       image: 'image of the yellow banana',
//     },
//   ],
// }

// // REDUX REDUCER

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_COMMODITY':
//       return {
//         commodities: state.commodities.concat({
//           id: 4,
//           title: 'Green Banana',
//           description: 'Description of the yellow banana',
//           image: 'image of the yellow banana',
//         }),
//       }
//     case 'REGISTER_FARMER':
//       return {}
//     default:
//       return state
//   }
// }

// // REDUX CREATE STORE

// const reduxStore = createStore(
//   reducer,
//   // Add Redux DevTools Extension
//   // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

////////////////////////////////////////////////////////////////////////////////
// REDUX STORE
// We replace the regular store with enhanced configureStore()
import configureStore from './redux/configurestore'
// import store from './redux/store'
const store = configureStore(/* provide initial state if any */)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
