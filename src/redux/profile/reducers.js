import actions from './actions'

const initialState = {
  profile:{},
  loading: false,
  myAssets:[]
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
