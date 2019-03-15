import commoditiesReducer from './commodities'
import { combineReducers } from 'redux'
import registerReducer from './register'
import farmersReducer from './farmers'
import buyersReducer from './buyers'

import loginReducer from './login'
import { connectRouter } from 'connected-react-router'
import commodityReducer from './commodity'
import addProductReducer from './addproduct'
import cartReducer from './cart'

// https://github.com/supasate/connected-react-router#usage
// Create a function that takes history as an argument and returns a root reducer.
// Add router reducer into root reducer by passing history to connectRouter.
// Note: The key MUST be router.

export default history =>
  combineReducers({
    router: connectRouter(history),
    register: registerReducer,
    login: loginReducer,
    commodities: commoditiesReducer,
    farmers: farmersReducer,
    buyers: buyersReducer,
    commodity: commodityReducer,
    addProduct: addProductReducer,
    cart: cartReducer,
  })
