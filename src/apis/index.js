import requests from './requests'

export const getVerify = (params = {}) => {
  return requests.get('/Api/Common/VerifyCode/verifyCode', { params })
}

export const postVerify = (payload) => {
  return requests.post('/Api/Common/Order/checkVerify', payload)
}

export const getOrderList = (params = {}) => {
  return requests.get('/Api/Common/Order/getOrderList', { params })
}

export const postLogin = (params = {}) => {
  return requests.get('/Api/User/Auth/login', { params })
}

export const postLogout = (payload) => {
  return requests.post('/Api/User/Auth/logout', payload)
}

export const getUserInfo = (params = {}) => {
  return requests.get('/Api/User/Auth/getInfo', { params })
}
