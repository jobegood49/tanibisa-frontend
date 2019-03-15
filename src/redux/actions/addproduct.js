import request from '../request'
import { push } from 'connected-react-router'

import browserStorage from '../browserStorage'

export const addProductBegin = () => ({
  type: 'ADD_PRODUCT_BEGIN'
})

export const addProductSuccess = response => {
  return {
    type: 'ADD_PRODUCT_SUCCESS',
    payload: {
      response
    }
  }
}

export const addProductError = error => ({
  type: 'ADD_PRODUCT_ERROR',
  payload: {
    error
  }
})

export const addProduct = payload => {
  return dispatch => {
    dispatch(addProductBegin())

    const token = browserStorage.getKey('token')

    console.log(payload)

    request({
      method: 'post',
      url: '/products',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: payload
    })
      .then(response => {
        dispatch(addProductSuccess(response))
        return response
      })
      .then(response => {
        dispatch(push('/'))
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(addProductError(error))
      })
  }
}
