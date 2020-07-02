import requests from './requests'

export const postLogin = (params = {}) => {
  return requests.get('/Api/User/Auth/login', { params })
}

export const postLogout = (payload) => {
  return requests.post('/Api/User/Auth/logout', payload)
}

export const getUserInfo = (params = {}) => {
  return requests.get('/Api/User/Auth/getInfo', { params })
}
