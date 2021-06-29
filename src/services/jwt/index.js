import { history } from 'index'
import apiClient from 'services/axios'
import store from 'store'

// login api
export async function login(email, password) {
  return apiClient
    .post('/auth/login', {
      email,
      password,
    })
    .then(response => {
      if (response) {
        const { data, status } = response
        if (status) {
          store.set('escrow_user', data)
          return response.data
        }
      }
      return false
    })
    .catch(err => console.log(err))
}

// register function
export async function register(payload) {
  return apiClient
    .post('/auth/register', payload)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// forgot password
export async function forgotPassword(email) {
  return apiClient
    .post('/auth/forgot_password', { email })
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// reset password
export async function resetPassword(data) {
  return apiClient
    .post('/auth/reset_password', data)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// logout function
export async function logout() {
  store.remove('escrow_user')
  history.push('/auth/login')
}

// all exchange offer api
export async function offers(payload) {
  return apiClient
    .get(`offer/${payload.offset}/${payload.limit}`)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// create exchange offer api
export async function createOffer(payload) {
  return apiClient
    .post(`user/offer`, payload)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// update exchange offer api
export async function updateOffer(payload) {
  return apiClient
    .put(`user/offer/${payload.id}`, payload)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// buy offer api
export async function buyOffer(payload) {
  return apiClient
    .post(`user/exchange/buy`, payload)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// assets api
export async function assets() {
  return apiClient
    .get(`assets`)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// get user profile
export async function profile() {
  return apiClient
    .get('/user/profile')
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// update user profile
export async function updateProfile(data) {
  return apiClient
    .put('/user/profile', data)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// get user assets
export async function getUserAssets() {
  return apiClient
    .get('/user/offer')
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// best sellers
export async function bestSellers(data) {
  return apiClient
    .get('/exchange/popular', data)
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}





// get wallet api
export async function wallet() {
  return apiClient
    .get('/getWalletHistory')
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// function to fetch utility history
export async function utilityHistory() {
  return apiClient
    .get('getUtilityHistory')
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// billing api calls
// eslint-disable-next-line camelcase
export async function billing(search_term) {
  return apiClient
    .post('/displayBills', {
      search_term,
    })
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

// eslint-disable-next-line camelcase
export async function paybill(amount, payment_method) {
  return apiClient
    .post('/payBills', {
      amount,
      payment_method,
    })
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}


