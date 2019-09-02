import request from '@/utils/request'

export function loginByUsername(username, password) {
  var grant_type = 'password'
  var scope = 'server'
  var randomStr = new Date().getTime()
  var code = ''
  const data = {
    username,
    password,
    randomStr,
    code,
    grant_type,
    scope
  }
  return request({
    url: '/auth/oauth/getToken',
    headers: {
       // 'Authorization': 'Basic Y29tLmdpdGh1Yi5saXV3ZWlqdzpjb20uZ2l0aHViLmxpdXdlaWp3Ljg4ODg4OA=='
       'Authorization': 'Basic U2FtcGxlQ2xpZW50SWQlM0F0Z2IuMjU4'
    },
    method: 'post',
    params: data
  })
}

export function logout(accesstoken) {
  return request({
    url: '/auth/auth/removeToken',
    method: 'post',
    params: { accesstoken }
  })
}

export function getUserInfo() {
  return request({
    url: '/auth/user/me',
    headers: {
       'Authorization': 'Basic U2FtcGxlQ2xpZW50SWQlM0F0Z2IuMjU4'
    },
    method: 'get'
  })
}
