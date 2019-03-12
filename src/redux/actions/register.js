import request from '../request'

export const registerFarmerBegin = () => ({
  type: 'REGISTER_FARMER_BEGIN',
})

export const registerFarmerSuccess = response => {
  return {
    type: 'REGISTER_FARMER_SUCCESS',
    payload: {
      response,
    },
  }
}

export const registerFarmerError = error => ({
  type: 'REGISTER_FARMER_ERROR',
  payload: {
    error,
  },
})

export const registerFarmer = payload => {
  return dispatch => {
    dispatch(registerFarmerBegin())

    request({
      method: 'post',
      url: '/farmers/register',
      data: payload,
    })
      .then(response => {
        console.info('response:', response)
        dispatch(registerFarmerSuccess(response))
        return response
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(registerFarmerError(error))
      })
  }
}

export const registerBuyerBegin = () => ({
  type: 'REGISTER_BUYER_BEGIN',
})

export const registerBuyerSuccess = response => {
  return {
    type: 'REGISTER_BUYER_SUCCESS',
    payload: {
      response,
    },
  }
}

export const registerBuyerError = error => ({
  type: 'REGISTER_BUYER_ERROR',
  payload: {
    error,
  },
})

export const registerBuyer = payload => {
  return dispatch => {
    dispatch(registerBuyerBegin())

    request({
      method: 'post',
      url: '/buyers/register',
      data: payload,
    })
      .then(response => {
        console.info('response:', response)
        dispatch(registerBuyerSuccess(response))
        return response
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(registerBuyerError(error))
      })
  }
}
