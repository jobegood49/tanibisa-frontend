import request from '../request'
import browserStorage from '../browserStorage'
import { push } from 'connected-react-router'

export const loginFarmerBegin = () => ({
  type: 'LOGIN_FARMER_BEGIN',
})

export const loginFarmerSuccess = response => {
  return {
    type: 'LOGIN_FARMER_SUCCESS',
    payload: {
      response,
    },
  }
}

export const loginFarmerError = error => ({
  type: 'LOGIN_FARMER_ERROR',
  payload: {
    error,
  },
})

export const setFarmerState = data => ({
  type: 'SET_FARMER_STATE',
  payload: data,
})

export const loginFarmer = payload => {
  return dispatch => {
    dispatch(loginFarmerBegin())

    request({
      method: 'post',
      url: '/farmers/login',
      data: payload,
    })
      .then(response => {
        console.info('response:', response)
        dispatch(loginFarmerSuccess(response))
        console.log('setting up the localstorage')
        // Set isAuthenticated to true in the storage
        // browserStorage.setKey('isAuthenticated', true)
        // Set token in the storage
        browserStorage.setKey('token', response.data.token)

        dispatch(
          setFarmerState({
            token: response.data.token,
            isAuthenticated: true,
            data: response.data.foundFarmer,
          })
        )
        return response
      })
      .then(() => {
        dispatch(push('/profileFarmer'))
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(loginFarmerError(error))
      })
  }
}

export const loginBuyerBegin = () => ({
  type: 'LOGIN_BUYER_BEGIN',
})

export const loginBuyerSuccess = response => {
  return {
    type: 'LOGIN_BUYER_SUCCESS',
    payload: {
      response,
    },
  }
}

export const loginBuyerError = error => ({
  type: 'LOGIN_BUYER_ERROR',
  payload: {
    error,
  },
})

export const setBuyerState = data => ({
  type: 'SET_BUYER_STATE',
  payload: data,
})

export const loginBuyer = payload => {
  return dispatch => {
    dispatch(loginBuyerBegin())

    request({
      method: 'post',
      url: '/buyers/login',
      data: payload,
    })
      .then(response => {
        console.info('response:', response)
        dispatch(loginBuyerSuccess(response))
        browserStorage.setKey('token', response.data.token)
        dispatch(
          setBuyerState({
            token: response.data.token,
            isAuthenticated: true,
            data: response.data.foundBuyer,
          })
        )

        return response
      })
      .then(() => {
        dispatch(push('/profileBuyer'))
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(loginBuyerError(error))
      })
  }
}
