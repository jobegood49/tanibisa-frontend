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
