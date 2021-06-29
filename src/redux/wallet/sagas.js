import { all, takeEvery, put, call } from 'redux-saga/effects'
// import { notification } from 'antd'
// import { history } from 'index'
import * as jwts from 'services/jwt'
import actions from './actions'

const jwt = {
    wallet: jwts.wallet,
}

export function* WALLET() {
  yield put({
    type: 'wallet/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.wallet)
  if (success.status) {
    yield put({
      type: 'wallet/SET_STATE',
      payload: {
        wallet: success.data,
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'wallet/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.WALLET, WALLET),
  ])
}
