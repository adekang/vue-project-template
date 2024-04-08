import request from '@/services/request/index.js'

export function requestPostApi(data) {
  return request.post({
    url: '/hi',
    data,
  })
}
