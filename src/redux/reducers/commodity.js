const initialState = {
  latestError: null,
  isLoading: false,
  data: {} // single commodity is an object
}

const commodityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMODITY_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null
      }
    }

    case 'GET_COMMODITY_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }

    case 'GET_COMMODITY_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error
      }
    }

    default: {
      return state
    }
  }
}

export default commodityReducer
