import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
// import { history } from 'index'
import { store as reduxStore  } from 'index'
import * as jwts from 'services/jwt'
import actions from './actions'

const jwt = {
    offers: jwts.offers,
    createOffer: jwts.createOffer,
    updateOffer: jwts.updateOffer,
    buyOffer: jwts.buyOffer,
    assets: jwts.assets,
}

// fetch all assets
export function* DASHBOARD({payload}) {
  yield put({
    type: 'dashboard/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.offers, payload)
  if (success && success.status) {
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        dashboard: success.data,
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

// create a new offer
export function* CREATE_OFFER({payload}) {
  yield put({
    type: 'dashboard/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.createOffer, payload.values)
  if (success && success.status) {
    if(payload.from === "dashboard"){
      yield reduxStore.dispatch({
        type: 'dashboard/DASHBOARD',
        payload:{limit:10, offset:0}
      })
    }else{
      yield reduxStore.dispatch({
        type:"profile/PROFILE"
      })
    }
    notification.success({
      message: 'Offer Created',
      description: success.message,
    })
  }
  if (!success.status) {
    notification.success({
      message: 'Failed',
      description: success.message,
    })
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

// update offer
export function* UPDATE_OFFER({payload}) {
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.updateOffer, payload)
  if (success && success.status) {
    yield reduxStore.dispatch({
      type:"profile/PROFILE"
    })
    notification.success({
      message: 'Offer Updated',
      description: success.message,
    })
  }
  if (!success.status) {
    notification.warning({
      message: 'Failed',
      description: success.message,
    })
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

// buy a new offer
export function* BUY_OFFER({payload}) {
  yield put({
    type: 'dashboard/SET_STATE',
    payload: {
      loading: true,
      exchangeSuccess: {},
      offerBought:false
    },
  })
  const success = yield call(jwt.buyOffer, payload)
  if (success && success.status) {
    yield reduxStore.dispatch({
      type: 'dashboard/DASHBOARD',
      payload:{limit:10, offset:0}
    })
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        offerBought: true,
        exchangeSuccess:success.data
      },
    })
    notification.success({
      message: 'Offer Bought',
      description: success.message,
    })
  }
  if (!success.status) {
    notification.success({
      message: 'Failed',
      description: success.message,
    })
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

// fetch all available assets
export function* ASSETS({payload}) {
  yield put({
    type: 'dashboard/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.assets, payload)
  if (success && success.status) {
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        assets: success.data,
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.DASHBOARD, DASHBOARD),
    takeEvery(actions.ASSETS, ASSETS),
    takeEvery(actions.CREATE_OFFER, CREATE_OFFER),
    takeEvery(actions.UPDATE_OFFER, UPDATE_OFFER),
    takeEvery(actions.BUY_OFFER, BUY_OFFER),
  ])
}
