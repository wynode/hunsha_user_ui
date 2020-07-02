import requests from './requests'

// Shop
export const fetchShopInfo = (params = {}) => {
  return requests.get('/Api/ShopUser/Shop/getShopInfo', { params })
}

// ShopOrder
export const fetchShopOrderList = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopOrder/getList', { params })
}

export const fetchShopOrder = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopOrder/getOne', { params })
}

export const postShopOrder = (payload) => {
  return requests.post('/Api/ShopUser/ShopOrder/add', payload)
}

export const patchShopOrder = (payload) => {
  return requests.post('/Api/ShopUser/ShopOrder/update', payload)
}

export const deleteShopOrder = (payload) => {
  return requests.post('/Api/ShopUser/ShopOrder/delete', payload)
}

// ShopOrderSku
export const fetchShopOrderSkuList = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopOrderSku/getList', { params })
}

export const fetchShopOrderSku = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopOrderSku/getOne', { params })
}

export const postShopOrderSku = (payload) => {
  return requests.post('/Api/ShopUser/ShopOrderSku/add', payload)
}

export const patchShopOrderSku = (payload) => {
  return requests.post('/Api/ShopUser/ShopOrderSku/update', payload)
}

export const deleteShopOrderSku = (payload) => {
  return requests.post('/Api/ShopUser/ShopOrderSku/delete', payload)
}

// ShopSku
export const fetchShopSkuList = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopSku/getList', { params })
}

export const fetchShopSku = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopSku/getOne', { params })
}

export const fetchShopSkuCategory = (params = {}) => {
  return requests.get('/Api/ShopUser/ShopSku/getCategoryList', { params })
}

export const postShopSku = (payload) => {
  return requests.post('/Api/ShopUser/ShopSku/add', payload)
}

export const patchShopSku = (payload) => {
  return requests.post('/Api/ShopUser/ShopSku/update', payload)
}

export const deleteShopSku = (payload) => {
  return requests.post('/Api/ShopUser/ShopSku/delete', payload)
}

// ShopUserPassword
export const patchShopUserPassword = (payload) => {
  return requests.post('/Api/ShopUser/ShopUser/updatePassword', payload)
}
