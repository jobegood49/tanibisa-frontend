import request from '../request'
import { push } from 'connected-react-router'

export const addProductBegin = () => ({
  type: 'ADD_PRODUCT_BEGIN',
})

export const addProductSuccess = response => {
  return {
    type: 'ADD_PRODUCT_SUCCESS',
    payload: {
      response,
    },
  }
}

export const addProductError = error => ({
  type: 'ADD_PRODUCT_ERROR',
  payload: {
    error,
  },
})

export const addProduct = payload => {
  return dispatch => {
    dispatch(addProductBegin())

    request({
      method: 'post',
      url: '/products',
      data: payload,
    })
      .then(response => {
        console.info('response:', response)
        dispatch(addProductSuccess(response))
        return response
      })
      .then(dispatch(push('/')))
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(addProductError(error))
      })
  }
}
