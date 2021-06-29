import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
// import * as firebase from 'services/firebase'
import * as jwts from 'services/jwt'
import actions from './actions'

const jwt = {
    login: jwts.login,
    register: jwts.register,
    logout: jwts.logout,
    forgotPassword: jwts.forgotPassword,
    resetPassword: jwts.resetPassword,
    bestSellers: jwts.bestSellers,
}

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // const { authProvider: autProviderName } = yield select(state => state.settings)
  const success = yield call(jwt.login, email, password)
  if (success.status) {
    yield history.push('/dashboard')
    notification.success({
      message: 'Logged In',
      description: success.message,
    })
  }
  if (!success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.warning({
      message: 'Logged In error',
      description: success.message,
    })
  }
}

export function* FORGOT_PASSWORD({ payload }) {
  const { email } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // const { authProvider: autProviderName } = yield select(state => state.settings)
  const success = yield call(jwt.resetPassword, payload)
  if (success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        email
      },
    })
    yield history.push('/auth/reset-password')
    notification.success({
      message: 'Request Sent',
      description: success.message,
    })
  }
  if (!success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.warning({
      message: 'Failed to sent request',
      description: success.message,
    })
  }
}

export function* RESET_PASSWORD({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // const { authProvider: autProviderName } = yield select(state => state.settings)
  const success = yield call(jwt.forgotPassword, payload)
  if (success.status) {
    yield history.push('/auth/login')
    notification.success({
      message: 'Password reset',
      description: success.message,
    })
  }
  if (!success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.warning({
      message: 'password reset failed',
      description: success.message,
    })
  }
}

export function* REGISTER({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.register, payload)
  console.log(success)
  if (success.status) {
    yield history.push('/auth/login')
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.success({
      message: 'Succesful Registered',
      description: success.message,
    })
  }
  if (!success.status) {
    notification.warning({
      message: 'Registeration fail',
      description: success.message,
    })
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export function* BEST_SELLER({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.bestSellers, payload)
  if (success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        bestSeller:success.data,
        loading: false,
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export function* LOGOUT() {
  yield call(jwt.logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.REGISTER, REGISTER),
    takeEvery(actions.LOGOUT, LOGOUT),
    takeEvery(actions.FORGOT_PASSWORD, FORGOT_PASSWORD),
    takeEvery(actions.RESET_PASSWORD, RESET_PASSWORD),
    takeEvery(actions.BEST_SELLER, BEST_SELLER),
    // LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
