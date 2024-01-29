import request from '@/services/request/index.js'

export function requestLoginApi(data) {
  return request.post({
    url: 'login',
    data,
  })
}
