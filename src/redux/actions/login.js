import request from '../request'

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
        return response
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
        return response
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(loginBuyerError(error))
      })
  }
}
