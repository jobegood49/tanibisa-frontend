import request from '../request'

export const getOneCartBegin = () => ({
  type: 'GET_ONECART_BEGIN',
})

export const getOneCartSuccess = response => {
  return {
    type: 'GET_ONECART_SUCCESS',
    payload: response,
  }
}

export const getOneCartError = error => ({
  type: 'GET_ONECART_ERROR',
  payload: {
    error,
  },
})

// getCommodity is a thunk
export const getOneCart = id => {
  return dispatch => {
    dispatch(getOneCartBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: `/carts/${id}`,
    })
      .then(response => {
        // get commodity key in data of response
        dispatch(getOneCartSuccess(response.data.cart))
        // commodity object would be like this:
        // {
        //   tags: [],
        //   name: "",
        //   description: ""
        // }
      })
      .catch(error => {
        dispatch(getOneCartError(error))
      })
  }
}
