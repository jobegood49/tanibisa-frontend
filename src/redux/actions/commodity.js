import request from '../request'

export const getCommodityBegin = () => ({
  type: 'GET_COMMODITY_BEGIN',
})

export const getCommoditySuccess = response => {
  return {
    type: 'GET_COMMODITY_SUCCESS',
    payload: {
      response,
    },
  }
}

export const getCommodityError = error => ({
  type: 'GET_COMMODITY_ERROR',
  payload: {
    error,
  },
})

// getCommodity is a thunk
export const getCommodity = id => {
  return dispatch => {
    dispatch(getCommodityBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: `/commodities/${id}`,
    })
      .then(response => {
        dispatch(getCommoditySuccess(response))
      })
      .catch(error => {
        dispatch(getCommodityError(error))
      })
  }
}
