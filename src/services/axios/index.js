import axios from 'axios'
import { history } from 'index'
import store from 'store'
// import { notification } from 'antd'

export const imageUrl = "http://crypto-escrow.herokuapp.com"

export const numberFormat = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);

const apiClient = axios.create({
  baseURL: 'http://crypto-escrow.herokuapp.com/api/v1/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

apiClient.interceptors.request.use(request => {
  const userData = store.get('escrow_user')
  if (userData) {
    // request.headers.Authorization = `Bearer ${userData.token}`
    request.headers.token = userData.data
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error
  console.log(error)
  if (response.status_code === 401 && response.message === "Token has expired") {
    store.remove('escrow_user')
    history.push("/auth/login")
  }
})

export default apiClient
