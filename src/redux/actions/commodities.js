import request from '../request'

export const getCommoditiesBegin = () => ({
  type: 'GET_COMMODITIES_BEGIN'
})

export const getCommoditiesSuccess = response => {
  return {
    type: 'GET_COMMODITIES_SUCCESS',
    payload: response
  }
}

export const getCommoditiesError = error => ({
  type: 'GET_COMMODITIES_ERROR',
  payload: {
    error
  }
})

// getCommodities is a thunk
export const getCommodities = payload => {
  return dispatch => {
    dispatch(getCommoditiesBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: '/commodities'
    })
      .then(response => {
        dispatch(getCommoditiesSuccess(response))
      })
      .catch(error => {
        dispatch(getCommoditiesError(error))
      })
  }
}
