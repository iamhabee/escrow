import actions from './actions'

const initialState = {
  wallet:[],
  loading: false,
}

export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
