import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user/reducers'
import menu from './menu/reducers'
import settings from './settings/reducers'
import dashboard from './dashboard/reducers'
import profile from './profile/reducers'
import wallet from './wallet/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    menu,
    settings,
    dashboard,
    profile,
    wallet,
  })
