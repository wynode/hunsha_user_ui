// const runtimeEnv = process.env.NODE_ENV
const buildEnv = process.env.VUE_APP_BUILD

const serverURL = new Map([
  ['development', 'http://othings.fosuss.com/'],
  ['testbuild', 'http://othings.fosuss.com/'],
  ['production', 'http://othings.fosuss.com/'],
])

const imgURL = new Map([
  ['development', 'http://othings.fosuss.com'],
  ['testbuild', 'http://othings.fosuss.com'],
  ['production', 'http://othings.fosuss.com'],
])

export const SERVER_API = serverURL.get(buildEnv)
export const IMG_URL = imgURL.get(buildEnv)

export const AUTH_TOKEN = 'client_session'
export const USER_INFO = 'clientUser'

// upload
export const UPLOAD_URL = `http://othings.fosuss.com/Api/Admin/common/upload`
// export const NOREMAL_UPLOAD_URL = `${serverURL.get(buildEnv)}/misc/file/`
