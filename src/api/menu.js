import request from '@/utils/request'

export function fetchUserTree() {
  return request({
    //url: '/admin/api/userTree',
    url: '/auth/user/me',
    method: 'get'
  })
}
