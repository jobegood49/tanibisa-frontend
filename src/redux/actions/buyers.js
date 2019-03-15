import request from '../request'
import { setBuyerState } from './login'

export const getOneBuyerBegin = () => ({
  type: 'GET_ONE_BUYER_BEGIN',
})

export const getOneBuyerSuccess = response => {
  return {
    type: 'GET_ONE_BUYER_SUCCESS',
    payload: {
      response,
    },
  }
}

export const getOneBuyerError = error => ({
  type: 'GET_ONE_BUYER_ERROR',
  payload: {
    error,
  },
})

export const getOneBuyer = token => {
  return dispatch => {
    dispatch(getOneBuyerBegin())

    request({
      method: 'get',
      url: `/buyers/profile`,
    })
      .then(response => {
        dispatch(getOneBuyerSuccess(response))
        dispatch(
          setBuyerState({
            token: token,
            isAuthenticated: true,
            data: response.data.buyer,
          })
        )
      })
      .catch(error => {
        dispatch(getOneBuyerError(error))
      })
  }
}
