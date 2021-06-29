import { all } from 'redux-saga/effects'
import user from './user/sagas'
import menu from './menu/sagas'
import settings from './settings/sagas'
import dashboard from './dashboard/sagas'
import profile from './profile/sagas'
import wallet from './wallet/sagas'

export default function* rootSaga() {
  yield all([user(), menu(), settings(), dashboard(), wallet(), profile()])
}
