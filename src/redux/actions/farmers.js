import request from '../request'
import { setFarmerState } from './login'

export const getOneFarmerBegin = () => ({
  type: 'GET_ONE_FARMER_BEGIN',
})

export const getOneFarmerSuccess = response => {
  return {
    type: 'GET_ONE_FARMER_SUCCESS',
    payload: {
      response,
    },
  }
}

export const getOneFarmerError = error => ({
  type: 'GET_ONE_FARMER_ERROR',
  payload: {
    error,
  },
})

export const getOneFarmer = token => {
  return dispatch => {
    dispatch(getOneFarmerBegin())

    request({
      method: 'get',
      url: `/farmers/profile`,
    })
      .then(response => {
        dispatch(getOneFarmerSuccess(response))
        dispatch(
          setFarmerState({
            token: token,
            isAuthenticated: true,
            data: response.data.farmer,
          })
        )
      })
      .catch(error => {
        dispatch(getOneFarmerError(error))
      })
  }
}
