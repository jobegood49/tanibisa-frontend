import request from '../request';

export const createCartBegin = () => ({
  type: 'CREATE_CART_BEGIN'
});

export const createCartSuccess = response => {
  return {
    type: 'CREATE_CART_SUCCESS',
    payload: {
      response
    }
  };
};

export const createCartError = error => ({
  type: 'CREATE_CART_ERROR',
  payload: {
    error
  }
});

export const createCart = payload => {
  return dispatch => {
    dispatch(createCartBegin());

    request({
      method: 'post',
      url: '/carts',
      data: payload
    })
      .then(response => {
        console.info('response:', response);
        dispatch(createCartSuccess(response));
        return response;
      })
      .catch(error => {
        console.error('error:', error);
        // REGISTER_USER_ERROR
        dispatch(createCartError(error));
      });
  };
};
