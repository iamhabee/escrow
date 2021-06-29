import { notification } from 'antd'
import { all, takeEvery, put, call } from 'redux-saga/effects'
// import { notification } from 'antd'
// import { history } from 'index'
import { store as reduxStore  } from 'index'
import * as jwts from 'services/jwt'
import actions from './actions'

const jwt = {
    profile: jwts.profile,
    updateProfile: jwts.updateProfile,
    getUserAssets: jwts.getUserAssets,
}

export function* PROFILE() {
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.profile)
  if (success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        profile: success.data,
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export function* UPDATE_PROFILE({payload}) {
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.updateProfile, payload)
  if (success.status) {
    console.log(success)
    yield reduxStore.dispatch({
      type: 'profile/PROFILE',
    })
    notification.success({
      message: 'updates',
      description: success.message,
    })
  }
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* CURRENT_USER_ASSETS() {
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.getUserAssets)
  if (success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        myAssets: success.data,
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.PROFILE, PROFILE),
    takeEvery(actions.UPDATE_PROFILE, UPDATE_PROFILE),
    takeEvery(actions.CURRENT_USER_ASSETS, CURRENT_USER_ASSETS),
  ])
}
