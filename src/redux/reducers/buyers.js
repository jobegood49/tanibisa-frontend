const initialState = {
  token: null,
  data: null,
  isAuthenticated: false,
}

export default function farmerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BUYER_STATE': {
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
        data: action.payload.data,
      }
    }

    case 'LOGOUT': {
      return {
        token: null,
        data: null,
        isAuthenticated: false,
      }
    }

    case 'REMOVE_BUYER_STATE': {
      return {}
    }

    default: {
      return state
    }
  }
}
