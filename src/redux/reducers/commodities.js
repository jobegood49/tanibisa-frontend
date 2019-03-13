const initialState = {
  latestError: null,
  isLoading: false
};

const commoditiesReducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_COMMODITIES_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null
      };
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_COMMODITIES_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.response.data.commodities
      };
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_COMMODITIES_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
};

export default commoditiesReducer;
